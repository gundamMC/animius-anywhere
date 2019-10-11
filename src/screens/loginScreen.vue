<template>
  <nb-container>
    <status-bar :barStyle="'light-content'"></status-bar>
    <image-background :source="loginScreenBg" class="image-container">
      <view class="logoContainer" :style="stylesObj.logoContainerStyle">
        <image-background :source="logo" class="logo" />
      </view>

      <nb-text :style="{fontSize: 32, marginTop: 5, alignSelf: 'center', color: 'white'}">Animius</nb-text>

      <nb-form class="vertical-margin">
        <nb-item floatingLabel class="form-item">
          <nb-label :style="{color: 'white'}">IP</nb-label>
          <nb-input :style="{color: 'white'}" v-model="ip"/>
        </nb-item>
        <nb-item floatingLabel class="form-item">
          <nb-label :style="{color: 'white'}">Username</nb-label>
          <nb-input :style="{color: 'white'}" v-model="username" />
        </nb-item>
        <nb-item floatingLabel class="form-item">
          <nb-label :style="{color: 'white'}">Password</nb-label>
          <nb-input :style="{color: 'white'}" v-model="password" />
        </nb-item>
      </nb-form>

      <nb-button class="button-container" v-bind:on-press="login">
        <nb-text>Login</nb-text>
      </nb-button>

      <!-- <nb-button class="button-container" v-bind:on-press="register">
        <nb-text>Register</nb-text>
      </nb-button> -->

      <nb-button
        v-bind:on-press="handleGuidePress"
        transparent
        light
        :style="{position: 'absolute', bottom: 0, alignSelf: 'center'}"
      >
        <nb-text>Get Animius</nb-text>
      </nb-button>
    </image-background>
  </nb-container>
</template>

<script>
import { Dimensions, Linking } from "react-native";
import loginScreenBg from "../../assets/login-bg.png";
import logo from "../../assets/logo.png";
import { Toast } from "native-base";

import store from '../store';

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      loginScreenBg: loginScreenBg,
      logo: logo,
      ip: "192.168.0.50:2334",
      username: "gundamMC",
      password: "gundamMC",

      stylesObj: {
        logoContainerStyle: {
          marginTop: Dimensions.get("window").height / 10,
          alignSelf: "center"
        }
      }
    };
  },
  methods: {
    login: function() {
      // callback for login / register
      auth_callback = (success, message) => {
        if (success) {
          this.navigation.navigate("Home");
        } else {
          Toast.show({
            text: message,
            buttonText: "Okay",
            duration: 3000
          });
        }
      };

      store.dispatch('login', { ip: this.ip, username: this.username, password: this.password, callback: auth_callback });

    },

    // register: function() {
      
    //   console.log(this.ip);
      
    //   store.dispatch('register', { ip: this.ip, username: this.username, password: this.password, callback: auth_callback });

    // },

    handleGuidePress: function() {
      Linking.openURL("https://animius.org/");
    }
  }
};
</script>
 
<style>
.image-container {
  flex: 1;
}

.vertical-margin {
  margin-top: 0;
  margin-bottom: 10%;
}

.button-container {
  width: 60%;
  align-self: center;
  margin-bottom: 20;
}

.form-item {
  width: 80%;
  align-self: center;
}

.logo {
  width: 100;
  height: 100;
}
</style>
