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
            <nb-right/>
        </nb-header>
        <nb-content padder :scrollEnabled="false">

            <ScrollView :style="{height: test}" ref="chatScroll" :onContentSizeChange="testChange">

                <chat-bubble v-for="message in chat" :is_user="message.is_user" :message="message.text" />

            </ScrollView>

            <view class="footer-view">
                <nb-item rounded>
                  <nb-input returnKeyType="send" :onSubmitEditing="sendText" ref="testsss"/>
                </nb-item>
            </view>
        </nb-content>

    </nb-container>
</template>

<script>
    import {Dimensions} from "react-native";

    import chatBubble from '../components/chatBubble';

    export default {
        props: {
            navigation: {
                type: Object
            }
        },
        created: function () {
            // if (!store.state.logged_in){
            //   this.navigation.navigate("Login");
            // }
            console.log(this.$props);
        },
        data() {
            return {
                chat: [
                    {is_user: true, text: 'hello'},
                    {is_user: false, text: 'Hi! How are you! This is a really long message'}
                ]
            }
        },
        computed: {
            test() {
                return Dimensions.get('window').height * 0.79
            },
            waifu(){
                return this.navigation.state.params['waifu']
            }
        },
        methods: {
            sendText(text) {
                this.chat.push({is_user: true, text: text.nativeEvent.text});

                this.$refs.testsss.wrappedInstance.clear();
                //
                // Vue.nextTick(function () {
                //   // DOM updated
                //     this.$refs.chatScroll.scrollToEnd({animated: true});
                // });

                console.log(this.navigation.state);

            },
            testChange() {
                this.$refs.chatScroll.scrollToEnd({animated: true});
            }
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
        background-color: #ffffff;
        padding: 5px;
    }

</style>
