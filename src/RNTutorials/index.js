import React, { Component } from "react";

import {
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  SafeAreaView
} from "react-native";
import { s, cs, colors } from "./../styles";
import CardView from "./components/CardView";

import RootNavigator from "./Navigation";

import { Font } from "expo";

class RNTutorials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontsLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "quicksand-medium": require("../../assets/fonts/Quicksand-Medium.ttf"),
      "quicksand-regular": require("../../assets/fonts/Quicksand-Regular.ttf"),
      "quicksand-bold": require("../../assets/fonts/Quicksand-Bold.ttf")
    });
    this.setState({ fontsLoaded: true });
  }
  render() {
    if (this.state.fontsLoaded) {
      return (
        <SafeAreaView style={[s.flex1]}>
          <RootNavigator />
        </SafeAreaView>
      );
    } else {
      return (
        <View style={[cs.container.flexCenter]}>
          <ActivityIndicator size="large" color="#0000FF" />
        </View>
      );
    }
  }
}

export default RNTutorials;
