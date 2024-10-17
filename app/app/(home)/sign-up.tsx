import React from "react";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ActivityIndicator, View } from "react-native";
import ThemedInput from "@/components/ThemedInput";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useAuth } from "@/context/authcontext";

const SignUp = () => {
  const { register } = useAuth();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");
  const [clicked, setClicked] = React.useState(false);

  const onPress = () => {
    setClicked(true);
    if (name === "") {
      alert("Please enter your name");
      return;
    }
    if (email === "") {
      alert("Please enter your email");
      return;
    }
    if (password === "") {
      alert("Please enter your password");
      return;
    }
    if (rePassword === "") {
      alert("Please re-enter your password");
      return;
    }
    if (password !== rePassword) {
      alert("Passwords do not match");
      return;
    }
    register!(name, email, password, rePassword, () => setClicked(false));
  };

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
          onChangeText={(e) => setEmail(e)}
        />
        <ThemedInput
          placeholder="Enter your password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(e) => setPassword(e)}
        />
        <ThemedInput
          placeholder="Re-enter your password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(e) => setRePassword(e)}
        />
        <Button
          onPress={onPress}
          clicked={clicked}
          style={{ flexDirection: "row", justifyContent: "center", gap: 4 }}
        >
          <ThemedText>Sign Up</ThemedText>
          {clicked && <ActivityIndicator />}
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
