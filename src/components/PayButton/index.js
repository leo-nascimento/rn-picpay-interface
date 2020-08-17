import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Buttom, Label } from "./styles";

const PayButton = ({ onPress, focused }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Buttom
        colors={!focused ? ["#00ac4a", "#01ac4a"] : ["#016533", "#026433"]}
        start={[1, 0.2]}
      >
        <MaterialIcons name="attach-money" size={30} color={"#fff"} />
        <Label focused={focused}>Pagar</Label>
      </Buttom>
    </TouchableWithoutFeedback>
  );
};

export default PayButton;
