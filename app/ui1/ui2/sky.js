import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  ListView,
  TouchableOpacity,
  Image,
  Text,
  View
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import mockRapper from "../../data/mockRappers.js";

const { height, width } = Dimensions.get("window");
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const color = "#e75d63";
const color2 = "rgba(78,160,26,0.7)";

export default class Sky extends Component {
  constructor() {
    super();
    this.state = {
      selectedVals: 4,
      cost: "$400",
      dataSource: ds.cloneWithRows(mockRapper),
      cover: {
        top: 0,
        left: 0
      }
    };
  }
  cover() {
    return (
      <View
        style={{
          height: this.props.cover.height,
          position: "absolute",
          right: 0,
          top: 0,
          width: this.props.cover.width,
          backgroundColor: "rgba(0,0,0,0.7)"
        }}
      />
    );
  }

  eachOption(x) {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 100,
          margin: 10,
          borderRadius: 5,
          backgroundColor: "rgba(255,255,255,0.2)"
        }}
      >
        <Image
          source={x.image}
          resizeMode="cover"
          style={{
            borderRadius: 10,
            width: null,
            height: null,
            flex: 1,
            margin: 10
          }}
        />
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: 5,
            margin: 3,
            width: 70,
            height: 30
          }}
        />
        <TouchableOpacity
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            top: -10,
            right: 0,
            borderRadius: 10,
            backgroundColor: color,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Icon name="close" color="#fff" size={12} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
  buybuybuy() {
    return (
      <View
        style={{
          height: 40,
          alignSelf: "center",
          position: "absolute",
          bottom: 10,
          left: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color2,
          width: width / 2,
          borderRadius: 15
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "900", fontSize: 13 }}>
          BUY for {this.state.cost}
        </Text>
      </View>
    );
  }
  nav() {
    return (
      <View
        style={{
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 5,
          backgroundColor: "rgba(0,0,0,0.7)"
        }}
      >
        <View style={{ width: 21 }} />
        <Text style={{ fontWeight: "700", fontSize: 13, color: "#7797e6" }}>
          {this.state.selectedVals} ITEM(S)
        </Text>
        <Icon name="close" color={color} size={21} />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.nav()}
        <ListView
          dataSource={this.state.dataSource}
          style={{ marginTop: 10 }}
          renderRow={rowData => this.eachOption(rowData)}
        />
        {this.buybuybuy()}
        {this.cover()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 0,
    top: 0,
    width: width / 1.7,
    height,
    backgroundColor: "#2e4b6d"
  }
});
