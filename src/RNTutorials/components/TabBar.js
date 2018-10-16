import React, { Component } from "react";

import { Text, View, Image, TouchableOpacity } from "react-native";
import { s, cs, colors } from "./../../styles";

import { tabData } from "./../data";

class TabBar extends Component {
  render() {
    return (
      <View style={[cs.tabBar.container]}>
        <View style={[cs.tabBar.tab]}>
          <TouchableOpacity
            onPress={() => this.props.selectTab(1)}
            style={cs.tabBar.touchable}
          >
            <Image
              source={this.props.tab1}
              style={[cs.tabBar.image, this.props.icon1]}
            />
            <Text style={[cs.tabBar.label, this.props.label1]}>HOME</Text>
          </TouchableOpacity>
        </View>
        <View style={[cs.tabBar.tab]}>
          <TouchableOpacity
            onPress={() => this.props.selectTab(2)}
            style={cs.tabBar.touchable}
          >
            <Image
              source={this.props.tab2}
              style={[cs.tabBar.image, this.props.icon2]}
            />
            <Text style={[cs.tabBar.label, this.props.label2]}>EXPLORE</Text>
          </TouchableOpacity>
        </View>
        <View style={[cs.tabBar.tab]}>
          <TouchableOpacity
            onPress={() => this.props.selectTab(3)}
            style={cs.tabBar.touchable}
          >
            <Image
              source={this.props.tab3}
              style={[cs.tabBar.image, this.props.icon3]}
            />
            <Text style={[cs.tabBar.label, this.props.label3]}>PROFILE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TabBar;
