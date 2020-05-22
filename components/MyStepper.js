import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

const MyStepper = ({ value, onIncrement, onDecrement, ...rest }) => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={onDecrement}>
          <FontAwesome name="minus" size={30} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement}>
          <FontAwesome name="plus" size={30} color={"black"} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{value}</Text>
        <Text>{rest.unit}</Text>
      </View>
    </View>
  );
};

export default MyStepper;
