import React, { Component } from "react";

import {
  Text,
  View,
  NativeModules,
  LayoutAnimation,
  TouchableWithoutFeedback
} from "react-native";
import { s, cs, colors } from "./../../styles";
import { Entypo } from "@expo/vector-icons";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

/* 

COMPONENT
<Accordion
    idCharacter="1"
    title="Chapter 1"/>

STYLES
accordion: {
  container,
  element1,
  element2,
  element3,
  idContainer,
  idText,
  titleText,
  plusColor
}
*/

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  _onPress = () => {
    LayoutAnimation.spring();
    if (this.state.expanded) {
      this.setState({ expanded: !this.state.expanded });
    } else {
      this.setState({ expanded: !this.state.expanded });
    }
  };

  _renderBody = () => <View style={[s.widthP100, s.height250, s.bgAccentT]} />;

  render() {
    return (
      <View style={[cs.accordion.expandableContainer]}>
        <TouchableWithoutFeedback onPress={() => this._onPress()}>
          <View>
            <View style={[cs.accordion.header]}>
              <View style={[cs.accordion.element1]}>
                <View style={[cs.accordion.idContainer]}>
                  <Text style={[cs.accordion.idText]}>
                    {this.props.idCharacter}
                  </Text>
                </View>
              </View>
              <View style={[cs.accordion.element2]}>
                <Text style={[cs.accordion.titleText]}>{this.props.title}</Text>
              </View>
              <View style={[cs.accordion.element3]}>
                <Entypo name="plus" size={32} color={cs.accordion.plusColor} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {this.state.expanded ? this._renderBody() : null}
      </View>
    );
  }
}

export default Accordion;
