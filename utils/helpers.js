import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { showToast, hideToast } from "../actions/toast";

export const chooseIcon = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    const icon = route.name === "Home" ? "home" : "plus";
    return <FontAwesome name={icon} color={color} size={size} />;
  },
});

export const generateUID = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const showConfirmationMessage = (dispatch, text) => {
  dispatch(showToast(text));
  setTimeout(() => hideToast(), 1000);
};
