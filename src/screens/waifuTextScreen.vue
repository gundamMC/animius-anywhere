<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent>
          <nb-icon name="arrow-back" :onPress="() => navigation.goBack()"/>
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>{{waifu.name}}</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>

        <ScrollView :style="{height: test}">
          <chatBubble is_user message="Hello"/>   
          
          <chatBubble message="Hello this is a really fucking long message hahahahaha hahah "/>
          <chatBubble is_user message="Hello this is a really fucking long message hahahahaha hahah "/>
          <chatBubble message="Hello this is a really fucking long message hahahahaha hahah "/>
          <chatBubble is_user message="Hello this is a really fucking long message hahahahaha hahah "/>

          <chatBubble message="Hello this is a really fucking long message hahahahaha hahah "/>
          <chatBubble is_user message="Hello this is a really fucking long message hahahahaha hahah "/>
          <chatBubble message="Hello this is a really fucking long message hahahahaha hahah "/>
          <chatBubble is_user message="Hello this is a really fucking long message hahahahaha hahah "/>

        </ScrollView>

        <view class="footer-view">
          <text-input class="text-input"/>
        </view>
    </nb-content>

  </nb-container>
</template>

<script>
import { Dimensions } from "react-native";
import loginScreenBg from '../../assets/login-bg.png';
import logo from "../../assets/logo.png";
import { Toast } from "native-base";

import client from '../socketClient.js';

import chatBubble from '../components/chatBubble';

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
      waifu: this.navigation.state.params['waifu'],
    }
  },
  computed: {
    test() {
      return Dimensions.get('window').height * 0.8
    }
  },
  methods: {
  },
  components: {
    chatBubble
  }
}
</script>
 
<style scoped>

.scroll-view {
  height: 400px;
}


.footer-view {
  position: relative;
  width: 100%;
  bottom: 0;
  background-color: #EFEFEF;
  padding: 5px;
}

.text-input {
  height: 40px;
}

</style>
