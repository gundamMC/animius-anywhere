<template>
    <root>
      <app-navigation></app-navigation>
    </root>
</template>

<script>
import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator } from "vue-native-router";
import { Root } from "native-base";

import HomeScreen from "../src/screens/homeScreen.vue";
import Sidebar from '../src/screens/sidebar.vue';

const Drawer = DrawerNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => {
      // console.log("props inside contentComponent", props);
      return <Sidebar {...props} />;
    }
  }
);
const AppNavigation = StackNavigator(
  {
    Drawer: Drawer
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"  // use custom header defined in each page
  }
);

export default {
    components: { Root, AppNavigation }
}

</script>