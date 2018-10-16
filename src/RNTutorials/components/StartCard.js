import React, { Component } from "react";

import { Text, View, TouchableOpacity, Image } from "react-native";
import { s, cs, colors } from "./../../styles";

import { startCardData } from "./../data";

class StartCard extends Component {
  render() {
    return (
      <View style={[cs.startCard.container]}>
        <View style={[s.flex3]}>
          <View style={[cs.startCard.title]}>
            <View style={[cs.startCard.titleIcon]}>
              <Text style={[cs.startCard.textIcon]}>{this.props.iconText}</Text>
            </View>
            <View style={[cs.startCard.titleLabel]}>
              <Text style={[cs.startCard.textLabel]}>
                {this.props.cardTitle}
              </Text>
            </View>
          </View>
        </View>
        <View style={[s.flex2, s.justifyCenter, s.paddingH20]}>
          <TouchableOpacity
            style={[cs.startCard.button]}
            onPress={() => this.props.startLesson()}
          >
            <Text style={[cs.startCard.playText]}>START</Text>
            <Image
              source={startCardData.playWhite}
              style={cs.startCard.playIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default StartCard;
