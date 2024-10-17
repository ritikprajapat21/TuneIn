import Button from "@/components/Button";
import Card from "@/components/Card";
import { HelloWave } from "@/components/HelloWave";
import ThemedInput from "@/components/ThemedInput";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@/context/authcontext";
import { Link } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const { login } = useAuth();

  return (
    <>
      <ThemedView style={{ flexDirection: "column", gap: 12, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThemedText
            numberOfLines={1}
            style={{ fontSize: 24, fontWeight: "bold" }}
          >
            Welcome back
          </ThemedText>
          <HelloWave />
        </View>
        <Card style={{ paddingVertical: 12 }}>
          <ThemedInput
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(e) => setEmail(e)}
          />
          <ThemedInput
            placeholder="Enter your password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(e) => setPassword(e)}
          />
          <Button
            onPress={() => {
              setClicked(true);
              login!(email, password, () => setClicked(false));
            }}
            style={{ flexDirection: "row", justifyContent: "center", gap: 4 }}
            clicked={clicked}
          >
            <ThemedText>Log in</ThemedText>
            {clicked && <ActivityIndicator />}
          </Button>
        </Card>

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
