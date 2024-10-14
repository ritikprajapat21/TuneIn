/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    inputBackgroundColor: "#fff",
    placeholderColor: "#969faf",
    cardBackgroundColor: "#f6f8fa",
    borderColor: "#d1d9e0b3",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151b23",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    inputBackgroundColor: "#0d1117",
    placeholderColor: "#f0f6fcbd",
    cardBackgroundColor: "#151b23",
    borderColor: "#3d444db3",
  },
};
