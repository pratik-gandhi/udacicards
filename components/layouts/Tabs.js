import React from "react";
import { connect } from "react-redux";
import { ActivityIndicator, StatusBar, Text} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SafeAreaView from 'react-native-safe-area-view';

import Home from "./Home";
import AddDeck from "../decks/AddDeck";
import { common, tabBarColors } from "../../styles/common";
import { accentColor } from "../../styles/theme";
import { chooseIcon } from "../../utils/helpers";

import { getInitialData } from "../../actions/index";

const Tab = createBottomTabNavigator();

class Tabs extends React.Component {
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }

  showIcon = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      const icon = route.name === "Home" ? "home" : "plus";
      return <FontAwesome name={icon} color={color} size={size} />;
    },
  });

  render() {
    const { loading } = this.props;

    return loading ? (
      <ActivityIndicator
        size="large"
        color={accentColor}
        style={common.centered}
      />
    ) : (
      <SafeAreaView style={common.container}>
        <StatusBar barStyle="dark-content" backgroundColor={accentColor} />
        <Tab.Navigator
          tabBarOptions={tabBarColors}
          initialRouteName="Home"
          screenOptions={chooseIcon}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Add new deck" component={AddDeck} />
        </Tab.Navigator>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ loading }) => {
  return {
    loading,
  };
};

export default connect(mapStateToProps)(Tabs);
