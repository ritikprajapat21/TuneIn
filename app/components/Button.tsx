import { Pressable, ViewStyle, type PressableProps } from "react-native";

type ButtonProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  clicked?: boolean;
} & PressableProps;

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  clicked,
  ...rest
}) => {
  return (
    <Pressable
      {...rest}
      style={({ pressed }) => [
        { opacity: pressed || clicked ? 0.5 : 1 },
        {
          backgroundColor: "#30a147",
          padding: 10,
          borderRadius: 5,
          margin: 8,
          width: "100%",
        },
        style,
      ]}
    >
      {children}
    </Pressable>
  );
};

export default Button;
