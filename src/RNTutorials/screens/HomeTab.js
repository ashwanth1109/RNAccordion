import React, { Component } from "react";

import {
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";
import { s, cs, colors } from "./../../styles";
import StartCard from "./../components/StartCard";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";

import { reactNativeIntro, chapterInfo } from "../data";
import ListItem from "../components/ListItem";
import CardView from "../components/CardView";
import Accordion from "../components/Accordion";
import Spacer from "../components/Spacer";

class HomeTab extends Component {
  // _renderItem = item => (
  //   <ListItem
  //     iconText={item.chapter}
  //     labelText={item.label}
  //     listItemPress={() => console.log(`Item clicked was ${item.chapter}`)}
  //     data={item.topics}
  //   />
  // );

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      pageLoaded: false
    };
  }

  async componentDidMount() {
    this.setState({ pageLoaded: true });
  }

  _renderAccordion = item => (
    <View>
      <Accordion
        idCharacter={item.chapter}
        title={item.label}
        data={item.topics}
        onPress={destination => this.props.navigation.navigate(destination)}
      />
      <Spacer changeValue="h" height={20} />
    </View>
  );

  // _keyExtractor = (item, index) => item.chapter.toString();

  render() {
    return (
      <ScrollView style={cs.homeTab.container}>
        <CardView
          height={300}
          circleText="RN"
          title="React Native Tutorials"
          buttonLabel="Let's get started"
          onPress={() => this.props.navigation.navigate("Lesson1")}
        />
        <Title titleText="What is React Native?" style={s.marginT10} />
        <Paragraph paragraphText={reactNativeIntro} />
        <Title
          titleText="List of topics covered:"
          style={(s.marginT10, s.marginB10)}
        />
        <Spacer changeValue="h" height={20} />
        <FlatList
          data={chapterInfo}
          renderItem={({ item }) => this._renderAccordion(item)}
          keyExtractor={(item, index) => item.chapter.toString()}
        />
        <Spacer changeValue="h" height={200} />
      </ScrollView>
    );
  }
}

export default HomeTab;
