import { View, ViewStyle } from "react-native";

const BaseView = ({
  children,
  styles,
}: { children: React.ReactNode; styles?: ViewStyle }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        ...styles,
      }}
    >
      {children}
    </View>
  );
};

export default BaseView;
