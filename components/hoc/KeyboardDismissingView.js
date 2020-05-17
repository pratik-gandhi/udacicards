import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

const KeyboardDismissingView = (Comp) => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  );
};
export default KeyboardDismissingView(View)