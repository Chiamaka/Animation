import React, { Component } from "react";
import { StyleSheet, Dimensions, StatusBar, View } from "react-native";
import Agua from "./ui2/agua";
import Orange from "./ui2/orange";
import Sky from "./ui2/sky";

const { height, width } = Dimensions.get("window");
const orange = "orange";
const agua = "agua";
const sky = "sky";

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      active: orange,
      aguaCover: {
        height: height,
        width: width
      },
      skyCover: {
        height: height,
        width: width / 1.7
      },
      orange: {
        left: 0
      }
    };
  }

  newActive(x) {
    this.setState({
      active: x
    });

    if (x === "agua") {
      this.setState({
        aguaCover: {
          height: 0,
          width: 0,
          baseWidth: width - 100,
          baseLeft: 90
        },
        skyCover: {
          height: height,
          width: width / 1.7
        },
        orange: {
          width: 90
        }
      });
    }
    if (x === "sky") {
      this.setState({
        skyCover: {
          height: 0,
          width: 0
        },
        aguaCover: {
          height: height,
          width: width / 2,
          baseWidth: width / 2,
          baseLeft: 0
        },
        orange: {
          left: -100
        }
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Sky
          active={this.state.active}
          cover={this.state.skyCover}
          newActive={data => this.newActive(data)}
        />
        <Agua
          active={this.state.active}
          cover={this.state.aguaCover}
          newActive={data => this.newActive(data)}
        />
        <Orange
          holderWidth={this.state.orange.width}
          active={this.state.active}
          newActive={data => this.newActive(data)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9a37e",
    flexDirection: "row"
  }
});
