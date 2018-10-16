import React, { Component } from "react";

import { Text, View, Image, TouchableOpacity } from "react-native";
import { s, cs, colors } from "./../../styles";

import { profileData } from "../data";

class ProfileHeader extends Component {
  render() {
    return (
      <View style={[cs.profileHeader.container]}>
        <Image
          source={profileData.devImage}
          style={cs.profileHeader.devImage}
          resizeMode="cover"
        />
        <View style={[s.flex1]}>
          <Text style={[cs.profileHeader.text]}>Ashwanth A R</Text>
        </View>
        <TouchableOpacity onPress={() => this.props.openSettings()}>
          <Image
            source={profileData.settings}
            style={cs.profileHeader.settings}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProfileHeader;
