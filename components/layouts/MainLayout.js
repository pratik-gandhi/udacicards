import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Provider, connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Constants from "expo-constants";

import Tabs from "./Tabs";
import DeckDetail from "../decks/DeckDetail";

import AddQuestion from "../questions/AddQuestion";
import Quiz from "../quiz/Quiz";

import { accentColor, foregroundTextColor } from "../../styles/theme";
import Toast from "../toast/Toast";

const Stack = createStackNavigator();

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <SafeAreaProvider>
        <NavigationContainer style={styles.navigationContainer}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Tabs}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="DeckDetail"
              component={DeckDetail}
              options={{
                title: "Details",
                headerStyle: {
                  backgroundColor: accentColor,
                },
                headerTintColor: foregroundTextColor,
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="AddQuestion"
              component={AddQuestion}
              options={{
                title: "Add a question",
                headerStyle: {
                  backgroundColor: accentColor,
                },
                headerTintColor: foregroundTextColor,
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="Quiz"
              component={Quiz}
              options={{
                title: "Quiz",
                headerStyle: {
                  backgroundColor: accentColor,
                },
                headerTintColor: foregroundTextColor,
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      {props.toast && props.toast != null && (
        <Toast toast={{...props.toast}} />
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
  },
  navigationContainer: {
    marginTop: "10%",
  },
});

const mapStateToProps = ({ toast }) => {
  return {
    toast,
  };
};

export default connect(mapStateToProps)(MainLayout);
