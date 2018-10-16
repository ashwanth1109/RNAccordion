import React, { Component } from "react";

import { Text, View } from "react-native";
import { s, cs, colors } from "./../../styles";
import ProfileHeader from "../components/ProfileHeader";
import TabPicker from "../components/TabPicker";

class ProfileTab extends Component {
  render() {
    return (
      <View style={[cs.profileTab.container]}>
        <ProfileHeader openSettings={() => console.log("Open Settings")} />
        <TabPicker />
      </View>
    );
  }
}

export default ProfileTab;
