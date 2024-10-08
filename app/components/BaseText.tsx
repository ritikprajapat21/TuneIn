import { Text, TextStyle } from "react-native";

const BaseText = ({
  children,
  styles,
}: { children: React.ReactNode; styles?: TextStyle }) => {
  return <Text style={{ color: "white", ...styles }}>{children}</Text>;
};

export default BaseText;
