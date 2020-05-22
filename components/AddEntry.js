import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getMetricMetaInfo, timeToString } from "../utils/helpers";
import MySteppers from "./MyStepper";
import MySlider from "./MySlider";
import DateHeader from "./DateHeader";
import { Ionicons } from "@expo/vector-icons";
export default class AddEntry extends Component {
  state = {
    run: 0,
    eat: 0,
    bike: 10,
    swim: 0,
    sleep: 10,
  };

  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric);

    this.setState((prevState) => ({
      [metric]:
        prevState[metric] >= max ? prevState[metric] : prevState[metric] + step,
    }));
  };

  decrement = (metric) => {
    const { step } = getMetricMetaInfo(metric);
    this.setState((prevState) => ({
      [metric]:
        prevState[metric] <= 0 ? prevState[metric] : prevState[metric] - step,
    }));
  };

  slide = (metric, value) => {
    this.setState({ [metric]: value });
  };

  submit = () => {
    this.setState({ run: 0, eat: 0, bike: 0, swim: 0, sleep: 0 });
  };

  reset = () => {
    this.setState({ run: 100, eat: 100, bike: 100, swim: 100, sleep: 100 });
  };

  render() {
    const info = getMetricMetaInfo();

    if (this.props.alreadyLogged) {
      return (
        <View>
          <Ionicons
            name={"ios-happy"}
            size={100}
            style={{
              backgroundColor: "yellow",
            }}
          />
          <Text>You already logged your information for today.</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#fc3e99",
              padding: 10,
              margin: 10,
              marginEnd: 50,
              marginLeft: "auto",
            }}
          >
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={{ marginTop: 55, marginLeft: 10 }}>
        <DateHeader date={new Date().toUTCString()} />
        {Object.keys(info).map((key) => {
          const { type, getIcon, ...rest } = info[key];
          const value = this.state[key];
          return (
            <View key={key}>
              {getIcon()}
              {type === "steppers" ? (
                <MySteppers
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                />
              ) : (
                <MySlider
                  value={value}
                  onChange={(value) => this.slide(key, value)}
                  {...rest}
                />
              )}
            </View>
          );
        })}
        <TouchableOpacity
          style={{
            backgroundColor: "#fc3e99",
            padding: 10,
            margin: 10,
            marginEnd: 50,
            marginLeft: "auto",
          }}
          onPress={this.submit}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
