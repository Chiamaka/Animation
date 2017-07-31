import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  ListView,
  TouchableOpacity,
  Dimensions,
  Image,
  LayoutAnimation,
  Text,
  View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import mockRapper from "../../data/mockRappers.js";

const { height, width } = Dimensions.get("window");
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const color = "#e75d63";

export default class Sky extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: ds.cloneWithRows(mockRapper),
      width: width - 85,
      cover: {
        height
      },
      left: 90
    };
  }

  makeActive() {}

  randomizeArray() {}
  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  toSky() {
    this.props.newActive("sky");
    this.setState({
      width: width / 2,
      left: 0
    });
  }

  cover() {
    return (
      <View
        style={{
          height: this.props.cover.height,
          position: "absolute",
          left: 0,
          top: 0,
          width: this.props.cover.width,
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
      />
    );
  }
  eachView(x) {
    return (
      <TouchableOpacity
        onPress={() => this.toSky()}
        style={{
          margin: 5,
          height: 300,
          borderRadius: 7,
          backgroundColor: "rgba(255,255,255,0.3)"
        }}
      >
        <Image
          source={x.image}
          reizeMode="contain"
          style={{
            flex: 2,
            margin: 5,
            borderRadius: 10,
            width: null,
            height: null
          }}
        />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 3 }}>
            <View
              style={{
                flex: 2,
                margin: 3,
                backgroundColor: "rgba(255,255,255,0.6)",
                borderRadius: 5
              }}
            />
            <View
              style={{
                flex: 1,
                margin: 3,
                backgroundColor: "rgba(255,255,255,0.6)",
                borderRadius: 5
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                width: 40,
                height: 40,
                margin: 10,
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: color
              }}
            >
              <Icon name="reply" size={23} color="#fff" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  navView() {
    return (
      <View
        style={{
          height: 50,
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.6)"
        }}
      >
        <Icon name="translate" color="#fff" size={23} />
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "300" }}>
          This is Water
        </Text>
        <Icon name="timeline" color="#fff" size={23} />
      </View>
    );
  }
  render() {
    if (this.props.active === "agua") {
      () => this.makeActive();
    }

    return (
      <View
        style={{
          position: "absolute",
          left: this.props.cover.baseLeft,
          top: 0,
          width: this.props.cover.baseWidth,
          height: height,
          backgroundColor: "#648bcc"
        }}
      >
        {this.navView()}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => this.eachView(rowData)}
          style={{ flex: 1 }}
        />
        {this.cover()}
      </View>
    );
  }
}
