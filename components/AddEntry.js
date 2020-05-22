import React, { Component } from "react";
import { View } from "react-native";
import { getMetricMetaInfo } from "../utils/helpers";

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

    this.setState((prevState) => {
      this.setState({
        [metric]:
          prevState.metric >= max ? prevState.metric : prevState.metric + step,
      });
    });
  };

  decreament = (metric) => {
    const { step } = getMetricMetaInfo(metric);

    this.setState((prevState) => {
      this.setState({
        [metric]:
          prevState.metric <= 0 ? prevState.metric : prevState.metric - step,
      });
    });
  };

  render() {
    return (
      <View>
        {getMetricMetaInfo("run").getIcon()}
        {getMetricMetaInfo("eat").getIcon()}
        {getMetricMetaInfo("bike").getIcon()}
        {getMetricMetaInfo("swim").getIcon()}
        {getMetricMetaInfo("sleep").getIcon()}
      </View>
    );
  }
}
