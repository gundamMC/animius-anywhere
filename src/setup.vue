<template>
  <view class="container">
    <app-loading v-if="!isAppReady"> </app-loading>
    <app v-if="isAppReady"></app>
  </view>
</template>


<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import { AppLoading } from "expo";
import App from "./App.vue";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);

// remove socket.io warning
// console.ignoredYellowBox = ['Remote debugger'];
// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings([
//     'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
// ]);

export default {
  components: { App, AppLoading },
  data: function() {
    return {
      isAppReady: false
    };
  },
  created: function() {
    this.loadFonts();
  },
  methods: {
    loadFonts: async function() {
      try {
        this.isAppReady = false;
        await Font.loadAsync({
          Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("../node_modules/native-base/Fonts/Roboto.ttf"),
          ...Ionicons.font
        });
        this.isAppReady = true;
      } catch (error) {
        console.log("some error occured", error);
        this.isAppReady = true;
      }
    }
  }
};
</script>

<style>
.container {
  flex: 1;
}
</style>