<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent>
          <nb-icon name="menu" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Header</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>

      <nb-text>Animius</nb-text>

      <nb-button :onPress="() => this.props.navigation.navigate('Login')">
        <nb-text>{{message}}</nb-text>
      </nb-button>
      
      <nb-form>
        <nb-item>
          <nb-input placeholder="Username" v-model="message" />
        </nb-item>
      </nb-form>

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


export default{
  props: {
    navigation: {
      type: Object
    }
  },
  created: function(){
    if (!store.state.logged_in){
      this.navigation.navigate("Login");
    }
  },
  data(){
    return {
      message: 'Hello World!'
    }
  }
}
</script>
 
<style>

</style>
