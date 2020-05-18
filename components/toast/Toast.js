import React, { useRef } from "react";
import { Text, StyleSheet, Animated} from "react-native";
import Constants from "expo-constants";

const animate = (fadeAnim, toValue, duration) => {
  return () => {
    Animated.timing(fadeAnim, {
      toValue,
      duration,
    }).start();
  };
};

const colors = {
    info: "#0275d8",
    warn: "#f0ad4e",
    error: '#d9534f',
    success: '#5cb85c'
}

export default function Toast(props) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(animate(fadeAnim, 1, 500), []);

  const { title, body, type } = props.toast
  const color = type && type !== null && colors[type] ? colors[type] : colors.info

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim, backgroundColor: color}]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "15%",
    width: "100%",
    position: "absolute",
    borderRadius: 5,
    top: Constants.statusBarHeight,
    left: 0,
    right: 0,
    opacity: 50
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    padding: 5,
  },
  body: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 5,
    color: "black",
    padding: 2,
  },
});
