import BaseView from "@/components/BaseView";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <BaseView>
      <ThemedText>Sign In</ThemedText>
      <Link href="/sign-up">
        <ThemedText type="link">Sign Up</ThemedText>
      </Link>
    </BaseView>
  );
};

export default SignIn;
