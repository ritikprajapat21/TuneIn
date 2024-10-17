import { Pressable, type PressableProps } from "react-native";

type ButtonProps = {
  children: React.ReactNode;
} & PressableProps;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Pressable
      {...rest}
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        {
          backgroundColor: "#30a147",
          padding: 10,
          borderRadius: 5,
          margin: 8,
          width: "100%",
        },
      ]}
    >
      {children}
    </Pressable>
  );
};

export default Button;
