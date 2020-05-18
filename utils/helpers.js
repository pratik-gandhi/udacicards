import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { showToast, hideToast } from "../actions/toast";
import { AsyncStorage } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

const NOTIFICATION_KEY = "UDACICARDS:NOTIFICATIONS";

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: "It's quiz time!",
    body: "👋 don't forget to complete a quiz for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day",
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}

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

export const showConfirmationMessage = (dispatch, title, body, type) => {
  dispatch(showToast({ title, body, type }));
  setTimeout(() => dispatch(hideToast()), 1200);
};
