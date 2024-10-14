import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/Button";
import { View } from "react-native";
import { router } from "expo-router";

const HomeIndex = () => {
  return (
    <ThemedView style={{ flexDirection: "column", gap: 24 }}>
      <View style={{ flexDirection: "row", justifyContent: "center",  alignItems: "flex-end", width: "100%" }}>
        <View style={{flexDirection: 'row'}}>
        <ThemedText
          type="defaultSemiBold"
          style={{
            fontSize: 30,
            paddingTop: 4,
          }}
        >
          Welcome to{' '}
        </ThemedText>
        <ThemedText type="title" style={{ fontSize: 30 }}>
          TuneIn
        </ThemedText>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
        <Button
          onPress={() => {
            router.push("/sign-in");
          }}
        >
          <ThemedText>Sign In</ThemedText>
        </Button>
        <Button
          onPress={() => {
            router.push("/sign-up");
          }}
        >
          <ThemedText>Sign Up</ThemedText>
        </Button>
      </View>
    </ThemedView>
  );
};

export default HomeIndex;
