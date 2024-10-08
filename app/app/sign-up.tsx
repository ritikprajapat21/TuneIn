import React from "react";
import BaseView from "@/components/BaseView";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

const SignUp = () => {
  return (
    <BaseView>
      <ThemedText>Sign Up</ThemedText>
      <Link href="/sign-in">
        <ThemedText type="link">Sign In</ThemedText>
      </Link>
    </BaseView>
  );
};

export default SignUp;
