import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthProvider, { useAuth } from "@/context/authcontext";
import Button from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Layout />
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}

const Layout = () => {
  const { authState, logout } = useAuth();

  return (
    <Stack>
      {authState?.authenticated ? (
        <Stack.Screen
          name="(tabs)"
          options={{
            headerRight: () => (
              <Button onPress={logout}>
                <ThemedText>Logout</ThemedText>
              </Button>
            ),
            headerLeft: () => null,
          }}
        />
      ) : (
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
};
