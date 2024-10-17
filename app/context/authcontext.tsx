import axios from "axios";
import SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthProps {
  authState?: { token: string | null; authenticated: boolean | null };
  register?: (
    name: string,
    email: string,
    password: string,
    rePassword: string,
  ) => Promise<any>;
  login?: (email: string, password: string) => Promise<any>;
  logout?: () => Promise<any>;
}

export const API_URL = "http://localhost:3000";
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

  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      setAuthState({
        token: result.data.token,
        authenticated: true,
      });

      axios.defaults.headers.common["Authorization"] =
        `Bearer ${result.data.token}`;

      await SecureStore.setItemAsync(KEY, result.data.token);

      return result;
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg };
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    rePassword: string,
  ) => {
    try {
      const result = await axios.post(`${API_URL}/register`, {
        name,
        email,
        password,
        rePassword,
      });

      return result;
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg };
    }
  };

  const logout = async () => {
    setAuthState({ token: null, authenticated: false });
    axios.defaults.headers.common["Authorization"] = null;
    await SecureStore.deleteItemAsync(KEY);
  };

  return (
    <AuthContext.Provider value={{ login, register, logout, authState }}>
      {children}
    </AuthContext.Provider>
  );
}
