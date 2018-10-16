import React, { Component } from "react";

import {
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  FlatList
} from "react-native";
import { s, cs, colors } from "./../../styles";
import { Entypo } from "@expo/vector-icons";

import SectionCard from "./SectionCard";

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

let accordionHeight;

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: new Animated.Value(0),
      expanded: false,
      accordionHeight: 0,
      openDuration: 0,
      opacity1: new Animated.Value(1),
      opacity2: new Animated.Value(0)
    };

    let data = this.props.data;
    let count = 0;
    for (let k in data) {
      if (data.hasOwnProperty(k)) count++;
    }
    this.state.accordionHeight = count * 60 + 40;
    this.state.openDuration = count * 100;
  }

  renderSectionCard = ({ item }) => {
    return (
      <SectionCard
        sideColor={item.sideColor}
        title={item.title}
        lesson={item.lesson}
        onPress={() => this.props.onPress(item.onPress)}
      />
    );
  };

  _keyExtractor = (item, index) => item.lesson.toString();

  renderContent = () => (
    <View style={[s.paddingV10]}>
      <FlatList
        data={this.props.data}
        renderItem={data => this.renderSectionCard(data)}
        keyExtractor={this._keyExtractor}
      />
    </View>
  );

  _expandBody = () => {
    this.setState({ expanded: !this.state.expanded });
    Animated.timing(this.state.height, {
      toValue: this.state.accordionHeight,
      duration: 1000
    }).start();
    Animated.timing(this.state.opacity1, {
      toValue: 0,
      duration: 1000
    }).start();
    Animated.timing(this.state.opacity2, {
      toValue: 1,
      duration: 1000
    }).start();
  };

  _shrinkBody = () => {
    this.setState({ expanded: !this.state.expanded });
    Animated.timing(this.state.height, {
      toValue: 0,
      duration: 1000
    }).start();
    Animated.timing(this.state.opacity1, {
      toValue: 1,
      duration: 1000
    }).start();
    Animated.timing(this.state.opacity2, {
      toValue: 0,
      duration: 1000
    }).start();
  };

  _onPress = () => {
    this.state.expanded ? this._shrinkBody() : this._expandBody();
  };

  _renderBody = () => (
    <Animated.View
      style={[s.widthP100, s.bgBackground, { height: this.state.height }]}
    >
      {this.renderContent()}
    </Animated.View>
  );

  render() {
    return (
      <View style={[cs.accordion.expandableContainer]}>
        <TouchableWithoutFeedback onPress={() => this._onPress()}>
          <View>
            <View style={[cs.accordion.header]}>
              <Animated.View
                style={[
                  cs.absoluteFlex,
                  { opacity: this.state.opacity1 },
                  s.flexRow,
                  s.bgBackground
                ]}
              >
                <View style={[cs.accordion.element1]}>
                  <View style={[cs.accordion.idContainer]}>
                    <Text style={[cs.accordion.idText]}>
                      {this.props.idCharacter}
                    </Text>
                  </View>
                </View>
                <View style={[cs.accordion.element2]}>
                  <Text style={[cs.accordion.titleText]}>
                    {this.props.title}
                  </Text>
                </View>
                <View style={[cs.accordion.element3]}>
                  <View style={[cs.accordion.plusMinusContainer]}>
                    <Entypo
                      name="plus"
                      size={32}
                      color={cs.accordion.plusColor}
                    />
                  </View>
                </View>
              </Animated.View>
              <Animated.View
                style={[
                  cs.absoluteFlex,
                  { opacity: this.state.opacity2 },
                  s.flexRow,
                  s.bgAccentS
                ]}
              >
                <View style={[cs.accordionOpen.element1]}>
                  <View style={[cs.accordionOpen.idContainer]}>
                    <Text style={[cs.accordionOpen.idText]}>
                      {this.props.idCharacter}
                    </Text>
                  </View>
                </View>
                <View style={[cs.accordionOpen.element2]}>
                  <Text style={[cs.accordionOpen.titleText]}>
                    {this.props.title}
                  </Text>
                </View>
                <View style={[cs.accordionOpen.element3]}>
                  <View style={[cs.accordionOpen.plusMinusContainer]}>
                    <Entypo
                      name="minus"
                      size={32}
                      color={cs.accordionOpen.plusColor}
                    />
                  </View>
                </View>
              </Animated.View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {this._renderBody()}
      </View>
    );
  }
}

export default Accordion;
