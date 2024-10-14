import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedView } from "./ThemedView";
import { ViewStyle } from "react-native";

const Card = ({
  children,
  style,
}: { children: React.ReactNode; style?: ViewStyle }) => {
  const backgroundColor = useThemeColor({}, "cardBackgroundColor");
  const borderColor = useThemeColor({}, "borderColor");

  return (
    <ThemedView
      style={[
        {
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor,
          alignItems: "center",
          width: "87%",
          paddingHorizontal: 12,
          maxWidth: 350,
          gap: 8,
          borderRadius: 8,
          borderWidth: 1,
          borderColor,
        },
        style,
      ]}
    >
      {children}
    </ThemedView>
  );
};

export default Card;
