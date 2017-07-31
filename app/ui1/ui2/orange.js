import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  LayoutAnimation,
  Image,
  Dimensions,
  TouchableOpacity,
  ListView,
  Text,
  View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import mockRapper from "../../data/mockRappers.js";
const { height, width } = Dimensions.get("window");
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class Orange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows(mockRapper),
      icons: 20,
      containerStyle: {
        position: "absolute",
        left: 0,
        top: 0,
        height: height,
        width: this.props.holderWidth,
        backgroundColor: "#f9a37e",
        borderRightWidth: 1,
        borderColor: "rgba(0,0,0,0.2)"
      },
      listStyle: {
        text1: {
          backgroundColor: "#e75d",
          width: 120,
          textAlign: "center",
          color: "#fff",
          padding: 5,
          borderRadius: 20,
          fontSize: 15,
          fontWeight: "600"
        },
        text2: {
          color: "#e75d63",
          fontSize: 12,
          margin: 5,
          width: 100,
          textAlign: "center",
          fontWeight: "700"
        }
      }
    };
  }

  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  updateView() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    this.props.newActive("agua");
    this.setState({
      containerStyle: {
        position: "absolute",
        left: this.props.left,
        top: 0,
        alignItems: "center",
        height: height,
        width: 90,
        backgroundColor: "#f9a37e",
        borderRightWidth: 1,
        borderColor: "rgba(0,0,0,0.2)"
      },
      listStyle: {
        text1: { width: 0 },
        text2: { width: 0 }
      },
      icons: 11
    });
  }

  eachIconView(x) {
    return (
      <TouchableOpacity
        onPress={() => this.updateView()}
        style={{
          flexDirection: "row",
          marginLeft: 5,
          marginRight: 5,
          borderBottomWidth: 1,
          borderColor: "rgba(231,93,0,0.3)",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Image
          source={x.image}
          resizeMode="contain"
          style={{ height: 55, width: 55, margin: 5, borderRadius: 10 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={this.state.listStyle.text1}>
            {x.first_name}
          </Text>
          <Text style={this.state.listStyle.text2}>
            {x.last_name}
          </Text>
        </View>
        <TouchableOpacity>
          <Icon name="more-vert" size={21} color="#e75d63" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  activeView() {
    return (
      <View style={this.state.containerStyle}>
        <View style={styles.nav}>
          <Icon name="ac-unit" size={this.state.icons} color="#ffdbbe" />
          <Text
            style={{
              color: "#fff",
              margin: 3,
              fontSize: 13,
              fontWeight: "400"
            }}
          >
            My UI
          </Text>
          <Icon name="spa" size={this.state.icons} color="#ffdbbe" />
        </View>
        <ListView
          horizonal={false}
          dataSource={this.state.dataSource}
          renderRow={rowData => this.eachIconView(rowData)}
          style={{}}
        />
      </View>
    );
  }
  render() {
    return (
      <View style={{}}>
        {this.activeView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 15,
    justifyContent: "space-between"
  }
});
