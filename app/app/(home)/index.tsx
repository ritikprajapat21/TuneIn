import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/Button";
import { View } from "react-native";
import { router } from "expo-router";

const HomeIndex = () => {
  return (
    <ThemedView style={{ flexDirection: "column", gap: 24, flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThemedText
            type="defaultSemiBold"
            style={{
              fontSize: 30,
              paddingTop: 4,
            }}
          >
            Welcome to{" "}
          </ThemedText>
          <ThemedText type="title" style={{ fontSize: 30, width: 100 }}>
            TuneIn
          </ThemedText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          paddingHorizontal: 36,
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Button
          onPress={() => {
            router.push("/sign-in");
          }}
        >
          <ThemedText style={{ color: "white", fontWeight: 700 }}>
            Sign In
          </ThemedText>
        </Button>
        <Button
          onPress={() => {
            router.push("/sign-up");
          }}
        >
          <ThemedText style={{ color: "white", fontWeight: 700 }}>
            Sign Up
          </ThemedText>
        </Button>
      </View>
    </ThemedView>
  );
};

export default HomeIndex;
