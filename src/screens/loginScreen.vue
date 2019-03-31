<template>
  <nb-container>
    <status-bar :barStyle="'light-content'"></status-bar>
    <image-background :source="loginScreenBg" class="image-container">
        
      <view class="logoContainer" :style="stylesObj.logoContainerStyle">
        <image-background :source="logo" class="logo">
      </view>

      <nb-text :style="{fontSize: 32, marginTop: 10, alignSelf: 'center', color: 'white'}">Animius</nb-text>

      <nb-form class="vertical-margin">
        <nb-item floatingLabel class="form-item">
          <nb-label :style="{color: 'white'}">Username</nb-label>
          <nb-input v-model="username"/>
        </nb-item>
        <nb-item floatingLabel class="form-item">
          <nb-label :style="{color: 'white'}">Password</nb-label>
          <nb-input v-model="password"/>
        </nb-item>
      </nb-form>

      <nb-button class="button-container" v-bind:on-press="handleBtnPress">
        <nb-text>Login</nb-text>
      </nb-button>

      <nb-button v-bind:on-press="handleGuidePress" transparent light :style="{position: 'absolute', bottom: 0, alignSelf: 'center'}">
        <nb-text>Get Animius</nb-text>
      </nb-button>

      </image-background>

  </nb-container>
</template>

<script>
import { Dimensions, Linking } from "react-native";
import loginScreenBg from '../../assets/login-bg.png';
import logo from "../../assets/logo.png";

export default{
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      loginScreenBg: loginScreenBg,
      logo: logo,
      username: "",
      password: "",

      stylesObj: {
        logoContainerStyle: {
          marginTop: Dimensions.get("window").height / 8,
          alignSelf: 'center'
        }
      }
    }
  },
  methods: {
    handleBtnPress: function() {
      alert(`Logging in with ${this.$data.username} : ${this.$data.password}`);
      this.navigation.navigate("Home");
    },
    handleGuidePress: function() {
      Linking.openURL('https://animius.org/')
    }
  }
}
</script>
 
<style>
.image-container {
  flex: 1;
}

.vertical-margin {
  margin-top: 10%;
  margin-bottom: 10%;
}

.button-container {
  width: 60%;
  align-self: center;
  margin-bottom: 10;
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
