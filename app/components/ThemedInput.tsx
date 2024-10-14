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
  const backgroundColor = useThemeColor({}, "inputBackgroundColor")
  const placeholderTextColor = useThemeColor({}, "placeholderColor")
  return (
    <TextInput
      placeholderTextColor={placeholderTextColor}
      style={[{ color, backgroundColor }, style, styles.text, ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    margin: 10,
    width: "100%",
  },
});

export default ThemedInput;
