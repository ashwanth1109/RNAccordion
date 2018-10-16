import React, { Component } from "react";

import { Text, View, Dimensions } from "react-native";
import { s, cs, colors } from "./../styles";

import TabBar from "./components/TabBar";
import HomeTab from "./screens/HomeTab";
import ExploreTab from "./screens/ExploreTab";
import ProfileTab from "./screens/ProfileTab";

import { tabData } from "./data";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

// IMPORT ALL LESSONS
import L1View from "./pages/basics/L1View";

import { createDrawerNavigator, createStackNavigator } from "react-navigation";

const HomeStackNav = createStackNavigator(
  {
    HomeTab: HomeTab,
    Lesson1: L1View
  },
  {
    initialRouteName: "HomeTab"
  }
);

class CustomTabNavigator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab1: {
        icon: tabData.homeRed,
        label: s.fontColorAccentS,
        iconSize: [s.height20, s.width20]
      },
      tab2: {
        icon: tabData.exploreBlack,
        label: s.fontColorText,
        iconSize: [s.height15, s.width15]
      },
      tab3: {
        icon: tabData.profileBlack,
        label: s.fontColorText,
        iconSize: [s.height15, s.width15]
      },
      tab: <HomeStackNav />
    };
  }

  selectTab = tab => {
    switch (tab) {
      case 1:
        this.setState({
          tab1: {
            icon: tabData.homeRed,
            label: s.fontColorAccentS,
            iconSize: [s.height20, s.width20]
          },
          tab2: {
            icon: tabData.exploreBlack,
            label: s.fontColorText,
            iconSize: [s.height15, s.width15]
          },
          tab3: {
            icon: tabData.profileBlack,
            label: s.fontColorText,
            iconSize: [s.height15, s.width15]
          },
          tab: <HomeStackNav />
        });
        break;
      case 2:
        this.setState({
          tab1: {
            icon: tabData.homeBlack,
            label: s.fontColorText,
            iconSize: [s.height15, s.width15]
          },
          tab2: {
            icon: tabData.exploreRed,
            label: s.fontColorAccentS,
            iconSize: [s.height20, s.width20]
          },
          tab3: {
            icon: tabData.profileBlack,
            label: s.fontColorText,
            iconSize: [s.height15, s.width15]
          },
          tab: <ExploreTab />
        });
        break;
      case 3:
        this.setState({
          tab1: {
            icon: tabData.homeBlack,
            label: s.fontColorText,
            iconSize: [s.height15, s.width15]
          },
          tab2: {
            icon: tabData.exploreBlack,
            label: s.fontColorText,
            iconSize: [s.height15, s.width15]
          },
          tab3: {
            icon: tabData.profileRed,
            label: s.fontColorAccentS,
            iconSize: [s.height20, s.width20]
          },
          tab: <ProfileTab />
        });
        break;
      default:
        this.setState({
          tab1: {
            icon: tabData.homeRed,
            label: s.fontColorRed500,
            iconSize: [s.height20, s.width20]
          },
          tab2: {
            icon: tabData.exploreBlack,
            label: s.fontColorText,
            iconSize: [s.height15, s.width15]
          },
          tab3: {
            icon: tabData.profileBlack,
            label: s.fontColorText,
            iconSize: [s.height15, s.width15]
          },
          tab: <HomeStackNav />
        });
    }
  };

  render() {
    return (
      <View style={[cs.container.flexOnly]}>
        <Header openDrawer={() => this.props.navigation.openDrawer()} />
        {this.state.tab}
        <TabBar
          tab1={this.state.tab1.icon}
          tab2={this.state.tab2.icon}
          tab3={this.state.tab3.icon}
          label1={this.state.tab1.label}
          label2={this.state.tab2.label}
          label3={this.state.tab3.label}
          icon1={this.state.tab1.iconSize}
          icon2={this.state.tab2.iconSize}
          icon3={this.state.tab3.iconSize}
          selectTab={tab => this.selectTab(tab)}
        />
      </View>
    );
  }
}

const drawerNav = createDrawerNavigator(
  {
    Item1: {
      screen: CustomTabNavigator
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get("window").width - 100
  }
);

export default drawerNav;
