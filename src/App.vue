<template>
    <root>
      <app></app>
    </root>
</template>

<script>
import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from "vue-native-router";
import { Root } from "native-base";

import HomeScreen from "../src/screens/homeScreen.vue";
import LoginScreen from "../src/screens/loginScreen.vue"
import WaifuTextScreen from "../src/screens/waifuTextScreen.vue"
import Sidebar from '../src/screens/sidebar.vue';

const Drawer = createDrawerNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    WaifuText: WaifuTextScreen
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => {
      return <Sidebar {...props} />;
    }
  }
);
const AppNavigation = createStackNavigator(
  {
    Drawer: Drawer
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"  // use custom header defined in each page
  }
);

const App = createAppContainer(AppNavigation);

export default {
    components: { Root, App }
}

</script>