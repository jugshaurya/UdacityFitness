import React from "react";
import { View, Text, Slider } from "react-native";

const MySlider = ({ value, onChange, ...rest }) => {
  return (
    <View>
      <Slider
        minimumValue={0}
        maximumValue={rest.max}
        step={rest.step}
        value={value}
        onValueChange={onChange}
      />

      <View>
        <Text>
          Value: {value} {rest.unit}
        </Text>
      </View>
    </View>
  );
};

export default MySlider;
