<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent>
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>{{waifu.name}}</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
    </nb-content>

  </nb-container>
</template>

<script>
import { Dimensions, Linking } from "react-native";
import loginScreenBg from '../../assets/login-bg.png';
import logo from "../../assets/logo.png";
import { Toast } from "native-base";

import client from '../socketClient.js';

export default{
  props: {
    navigation: {
      type: Object
    }
  },
  created: function(){
    // if (!store.state.logged_in){
    //   this.navigation.navigate("Login");
    // }
    console.log(this.$props);
  },
  data() {
    return {
      loginScreenBg: loginScreenBg,
      waifu: this.navigation.state.params['waifu']
    }
  },
  methods: {
  }
}
</script>
 
<style>
.speech-bubble {
  background-color: #00aabb;
  border-radius: 4;
}

</style>
