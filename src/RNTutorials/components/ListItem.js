import React, { Component } from "react";

import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList
} from "react-native";
import { s, cs, colors } from "./../../styles";

import SectionCard from "./SectionCard";

import { Entypo } from "@expo/vector-icons";

const ArrowDown = () => (
  <Entypo name="chevron-small-down" size={20} color={colors.Text} />
);

const ArrowRight = () => (
  <Entypo name="chevron-small-right" size={20} color={colors.Text} />
);

const ShadeLayer = () => <View style={[cs.shadeClick]} />;

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      pressed: false
    };
  }

  renderSectionCard = item => (
    <SectionCard
      sideColor={item.sideColor}
      title={item.title}
      lesson={item.lesson}
    />
  );

  _keyExtractor = (item, index) => item.lesson.toString();

  renderContent = () => (
    <View style={[s.paddingV10]}>
      <FlatList
        data={this.props.data}
        renderItem={({ item }) => this.renderSectionCard(item)}
        keyExtractor={this._keyExtractor}
      />
    </View>
  );

  render() {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => this.setState({ expanded: !this.state.expanded })}
          onPressIn={() => this.setState({ pressed: true })}
          onPressOut={() => this.setState({ pressed: false })}
        >
          <View>
            <View style={[cs.listItem.container]}>
              {this.state.expanded ? <ShadeLayer /> : null}
              <View style={[s.flex1, s.center]}>
                <View style={[cs.listItem.icon]}>
                  <Text style={[cs.listItem.iconText]}>
                    {this.props.iconText}
                  </Text>
                </View>
              </View>
              <View style={[s.flex4, s.justifyCenter]}>
                <View style={[cs.listItem.label]}>
                  <Text style={[cs.listItem.labelText]}>
                    {this.props.labelText}
                  </Text>
                </View>
              </View>
              <View style={[s.paddingH10]}>
                {this.state.expanded ? <ArrowRight /> : <ArrowDown />}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View>{this.state.expanded ? this.renderContent() : null}</View>
      </View>
    );
  }
}

export default ListItem;
