<template>
    <view :style="container_style">

        <nb-thumbnail small :source="{url: 'https://gundammc.com/images/avatar.jpg'}"/>

        <view class="chat-bubble" :style="bubble_style">
            <text :style="text_style">{{message}}</text>
        </view>
    </view>
</template>

<script>



export default {
    props: {
        message: String,
        is_user: Boolean
    },
    computed: {
        container_style() {
            return this.is_user
            ? {flex: 1, flexDirection:'row-reverse'}
            : {flex: 1, flexDirection:'row'};
        },
        bubble_style() {
            return this.is_user
            ? {backgroundColor: '#0084ff', color: '#FFFFFF'}
            : {backgroundColor: '#efefef', color: '#000000'};
        },
        text_style() {
            return this.is_user
            ? {color: '#FFFFFF'}
            : {color: '#000000'};
        }
    }
}
</script>

<style scoped>
    .chat-bubble {
        border-radius: 4px;
        padding: 15px;
        margin: 5px;
        max-width: 60%;
        justify-content: center;
        height: auto;
        width: auto;
    }
</style>