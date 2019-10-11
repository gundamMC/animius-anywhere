<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent>
          <nb-icon name="menu" :onPress="() => navigation.openDrawer()"/>
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Animius</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>

      <!-- <nb-text>Animius</nb-text>

      <nb-button :onPress="() => this.props.navigation.navigate('Login')">
        <nb-text>{{message}}</nb-text>
      </nb-button>
      
      <nb-form>
        <nb-item>
          <nb-input placeholder="Username" v-model="message" />
        </nb-item>
      </nb-form> -->

      <nb-card v-for="waifu in waifus" :key="waifu.name">
        <nb-card-item>
          <nb-left>
            <nb-h2>{{ waifu.name }}</nb-h2>
            <nb-text note>{{ waifu.description }}</nb-text>
          </nb-left>
          <nb-right>
              <nb-icon name="edit" type="MaterialIcons" :style="{ fontSize: 20 }" />
            </nb-right>
        </nb-card-item>

        <nb-card-item cardBody button :onPress="() => cardPressed(waifu)">
            <image :source="{url: waifu.image}" class="card-item-image" :style="{resizeMode: 'cover'}"/>
        </nb-card-item>

        <nb-card-item button :onPress="() => cardPressed(waifu)">
            <nb-text note>Today's weather in Chicago is...</nb-text>
            <nb-right>
              <nb-text note>11h ago</nb-text>
            </nb-right>
        </nb-card-item>
      </nb-card>

    </nb-content>

    <!-- probably will not need a footer  -->
    <!-- <nb-footer>
      <nb-footer-tab>
        <nb-button active full>
          <nb-text>Footer</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer> -->

  </nb-container>
</template>

<script>

import store from '../store';
import client from '../socketClient.js';
import { Toast } from "native-base";


export default{
  props: {
    navigation: {
      type: Object
    }
  },
  created: function(){
    if (!store.getters.logged_in){
      this.navigation.navigate("Login");
    } else {
      store.dispatch('getWaifuList');
    }
  },
  methods: {
    cardPressed: function(waifu){
      // navigate to waifu
      console.log(`Navigating to id ${waifu.name}`);
      this.navigation.navigate({routeName: 'WaifuText', key: waifu.name, params: {waifu: waifu}});
    },
  },
  data(){
    return {
    }
  },
  computed: {
    waifus() {
      return store.getters.waifuList;
    }
  }
}
</script>
 
<style>
.card-item-image {
  flex: 1;
  height: 200;
}
</style>
