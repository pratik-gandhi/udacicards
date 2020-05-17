import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { accentColor, foregroundTextColor } from "./theme";

export const common = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
      marginTop: "10%"
  }
});

export const tabBarColors = {
  activeTintColor: foregroundTextColor,
  activeBackgroundColor: accentColor,
};
