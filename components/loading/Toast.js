import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

const Toast = (props) => {
  return (
    <View>
      {/* <Text>{props.message}</Text> */}
      <Text>This is toast message</Text>
    </View>
  );
};

const mapStateToProps = ({ toast }) => {
  return {
    message: toast.text,
  };
};

export default connect(mapStateToProps)(Toast);
