import React, { Component } from "react";

import { Text, View } from "react-native";
import { s, cs, colors } from "./../../styles";
import ShadeButton from "./ShadeButton";

class CardView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[cs.cardView.container, { height: this.props.height }]}>
        <View style={[cs.cardView.block]}>
          <View style={[cs.cardView.circle]}>
            <Text style={[cs.cardView.circleText]}>
              {this.props.circleText}
            </Text>
          </View>
        </View>
        <View style={[cs.cardView.block]}>
          <Text style={[cs.cardView.title]}>{this.props.title}</Text>
        </View>
        <View style={[s.flex1, s.center]}>
          <ShadeButton
            label={this.props.buttonLabel}
            onPress={() => this.props.onPress()}
          />
        </View>
      </View>
    );
  }
}

export default CardView;
