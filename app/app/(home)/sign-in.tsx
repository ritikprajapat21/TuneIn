import Button from "@/components/Button";
import { HelloWave } from "@/components/HelloWave";
import ThemedInput from "@/components/ThemedInput";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, router } from "expo-router";
import { View } from "react-native";

const SignIn = () => {
  return (
    <>
      <ThemedView style={{ flexDirection: "column", gap: 16 }}>
        <View style={{ flexDirection: "row", gap: 8, alignItems: 'center', justifyContent:'center' }}>
          <ThemedText numberOfLines={1} style={{ fontSize: 24, fontWeight: "bold" }}>
            Welcome back
          </ThemedText>
          <HelloWave />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "87%",
            paddingVertical: 20,
            paddingHorizontal: 10,
            gap: 4,
            borderRadius: 8,
          }}
        >
          <ThemedInput
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <ThemedInput
            placeholder="Enter your password"
            secureTextEntry
            autoCapitalize="none"
          />
          <Button
            onPress={() => {
              router.push("/(tabs)");
            }}
          >
            <ThemedText>Log in</ThemedText>
          </Button>
        </View>

        <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
          <ThemedText>Not registered?</ThemedText>
          <ThemedText type="link">
            <Link href="/sign-up">Sign up</Link>
          </ThemedText>
        </View>
      </ThemedView>
    </>
  );
};

export default SignIn;
