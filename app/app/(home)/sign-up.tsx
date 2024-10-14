import React from "react";
import { Link, router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { View } from "react-native";
import ThemedInput from "@/components/ThemedInput";
import Button from "@/components/Button";
import Card from "@/components/Card";

const SignUp = () => {
  const [name, setName] = React.useState("");

  return (
    <ThemedView
      style={{ flexDirection: "column", gap: 8, alignItems: "center", flex: 1 }}
    >
      <ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>
        Welcome {name}
      </ThemedText>
      <Card style={{ paddingVertical: 12 }}>
        <ThemedInput
          placeholder="Enter your name"
          autoCapitalize="words"
          onChangeText={(e) => setName(e)}
        />
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
        <ThemedInput
          placeholder="Re-enter your password"
          secureTextEntry
          autoCapitalize="none"
        />
        <Button
          onPress={() => {
            router.push("/sign-in");
          }}
        >
          <ThemedText>Sign Up</ThemedText>
        </Button>
      </Card>
      <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
        <ThemedText>Already have an account?</ThemedText>
        <ThemedText type="link">
          <Link href="/sign-in">Sign in</Link>
        </ThemedText>
      </View>
    </ThemedView>
  );
};

export default SignUp;
