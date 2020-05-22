import React, { Component } from "react";
import { View, Text } from "react-native";
import { getMetricMetaInfo } from "../utils/helpers";
import Steppers from "./Stepper";
import Slider from "./Slider";

export default class AddEntry extends Component {
  state = {
    run: 0,
    eat: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
  };

  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric);

    this.setState((prevState) => ({
      [metric]:
        prevState.metric >= max ? prevState.metric : prevState.metric + step,
    }));
  };

  decrement = (metric) => {
    const { step } = getMetricMetaInfo(metric);
    this.setState((prevState) => ({
      [metric]:
        prevState.metric <= 0 ? prevState.metric : prevState.metric - step,
    }));
  };

  slide = (metric, val) => {
    this.setState({ [metric]: value });
  };

  render() {
    const info = getMetricMetaInfo();

    return (
      <View>
        {Object.keys(info).map((key) => {
          const { type, getIcon, ...rest } = info[key];
          const value = this.state[key];
          return (
            <View key={key}>
              {getIcon()}
              {type === "steppers" ? (
                <Steppers
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                />
              ) : (
                <Slider
                  value={value}
                  onChange={(value) => this.slider(key, value)}
                  {...rest}
                />
              )}
            </View>
          );
        })}
      </View>
    );
  }
}
