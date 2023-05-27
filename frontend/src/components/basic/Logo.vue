<template>
    <div class="logo">
        <img :src="Logo" />
        <span class="logo-title">{{ title }}</span>
    </div>
</template>
   
<script setup lang="ts">
import { ref } from "vue";
import Logo from "~/assets/images/logo-universal.png";
const title = ref("wails starter");
</script>
   
<style lang="scss" scoped>
.logo {
    display: flex; // 弹性布局
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #bd34fe;
    text-align: center;
    cursor: pointer; // 鼠标悬浮在元素上时，鼠标从箭头变成小手
    align-items: center;

    img {
        width: 36px;
        height: 36px;
        margin-left: 20px; // 元素的外边距
        margin-right: 12px;
        background: #fff;
        border-radius: 6px;
    }

    .logo-title {
        font-weight: 800; // 800为加粗
        color: white;
        font-size: 20px;
        line-height: 60px; // 元素上下居中
        font-family: FangSong; // 字体类型
    }
}
</style>