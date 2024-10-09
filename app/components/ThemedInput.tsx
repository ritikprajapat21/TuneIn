import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type ThemedInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};
const ThemedInput: React.FC<ThemedInputProps> = ({
  lightColor,
  darkColor,
  style,
  ...rest
}) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return (
    <TextInput
      placeholderTextColor="#f0f6fcbd"
      style={[{ color }, style, styles.text]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: "#0d1117",
    padding: 8,
    borderRadius: 10,
    margin: 10,
    width: "100%",
  },
});

export default ThemedInput;
