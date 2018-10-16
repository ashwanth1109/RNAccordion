import React, { Component } from "react";

import { Text, View, TouchableOpacity } from "react-native";
import { s, cs, colors } from "./../../styles";

class TabPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabSelected: 1
    };
  }

  _selectTab = tab => {
    this.setState({
      tabSelected: tab
    });
  };
  render() {
    return (
      <View style={[cs.tabPicker.container]}>
        <TouchableOpacity
          style={[
            cs.tabPicker.tab,
            this.state.tabSelected === 1 ? cs.tabPicker.selected : null
          ]}
          onPress={() => this._selectTab(1)}
        >
          <Text style={[cs.tabPicker.text]}>About Me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            cs.tabPicker.tab,
            this.state.tabSelected === 2 ? cs.tabPicker.selected : null
          ]}
          onPress={() => this._selectTab(2)}
        >
          <Text style={[cs.tabPicker.text]}>My Journey</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TabPicker;
