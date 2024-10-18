import axios from "axios";
import { router } from "expo-router";
import SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthProps {
  authState?: { token: string | null; authenticated: boolean | null };
  register?: (
    name: string,
    email: string,
    password: string,
    rePassword: string,
    fn: () => void,
  ) => Promise<any>;
  login?: (email: string, password: string, fn: () => void) => Promise<any>;
  logout?: () => Promise<any>;
}

export const API_URL = "http://192.168.43.136:3000";
const AuthContext = createContext({} as AuthProps);
const KEY = "authToken";

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }: any) {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({ token: null, authenticated: null });

  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await SecureStore.getItemAsync(KEY);
        if (token) {
          setAuthState({ token, authenticated: true });
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
      } catch (e) {
        return e;
      }
    };

    loadToken();
  }, []);

  const login = async (email: string, password: string, fn: () => void) => {
    try {
      const result = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      if (result.status !== 200) {
        throw Error(result.data.msg);
      }

      setAuthState({
        token: result.data.token,
        authenticated: true,
      });

      axios.defaults.headers.common["Authorization"] =
        `Bearer ${result.data.token}`;

      router.replace("/(tabs)");

      await SecureStore.setItemAsync(KEY, result.data.token);

      return result;
    } catch (e) {
      return { error: true, msg: (e as any).message };
    } finally {
      fn();
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    rePassword: string,
    fn: () => void,
  ) => {
    try {
      const result = await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password,
        rePassword,
      });
      console.log(result);
      if (result.status !== 200) {
        throw Error(result.data.msg);
      }

      alert(result.data.msg);

      router.push("/sign-in");

      return result;
    } catch (e) {
      console.error((e as any).message);
      return { error: true, msg: (e as any).message };
    } finally {
      fn();
    }
  };

  const logout = async () => {
    setAuthState({ token: null, authenticated: false });
    axios.defaults.headers.common["Authorization"] = null;
    await SecureStore?.deleteItemAsync(KEY);
    router.replace("/(home)");
  };

  return (
    <AuthContext.Provider value={{ login, register, logout, authState }}>
      {children}
    </AuthContext.Provider>
  );
}
