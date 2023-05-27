<template>
    <el-menu class="el-menu-vertical" :default-active="currentRouterPath" :router="true" :unique-opened='uniqueOpenedFlag'>
        <!-- 在为el-menu设置unique-opened属性时必须要确保el-sub-menu、el-menu-item中index的唯一性，如果index不唯一则不生效 -->
        <!-- 本组件作为父组件向子组件传递数据menuList，子组件需要定义menuList属性以确保可以接受该数据 -->
        <menu-item :menuList="menuList"></menu-item>
    </el-menu>
</template>
   
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from 'vue-router'

// 自定义的假的树形菜单数据
// reactive函数用来处理响应式数据，处理的数据一般是复杂类型数据，如对象类型
// ref函数也可以处理响应式数据，不过数据一般是基本数据类型
const isCollapse = ref(false)
const uniqueOpenedFlag = ref(true)
const currentRouterPath = ref("")

onMounted(() => {


    const route = useRouter()
    currentRouterPath.value = route.currentRoute.value.path



})

const menuList = reactive([
    {
        path: "/home",
        name: "home",
        meta: {
            title: "首页/home",
            icon: "i-ep-home-filled",
        }
    },
    {
        path: "/runtime",
        name: "runtime",
        meta: {
            title: "runtime",
            icon: "",
        },
        children: [

            {
                path: "/runtime/dialog",
                name: "dialog",
                component: "Layout",
                meta: {
                    title: "弹窗/dialog",
                    icon: "i-ep-chat-line-square",
                },
            },
            {
                path: "/runtime/window",
                name: "window",
                meta: {
                    title: "窗口/window",
                    icon: "i-ep-monitor",
                },
            },
            {
                path: "/runtime/event",
                name: "event",
                meta: {
                    title: "事件/event",
                    icon: "i-ep-pointer",
                },
            },
            {
                path: "/runtime/menu",
                name: "menu",
                meta: {
                    title: "菜单/menu",
                    icon: "i-ep-document",
                },
            },
            {
                path: "/runtime/log",
                name: "log",
                meta: {
                    title: "日志/log",
                    icon: "i-ep-expand",
                },
            },
            {
                path: "/runtime/clipboard",
                name: "clipboard",
                meta: {
                    title: "剪贴板/clipboard",
                    icon: "i-ep-document-copy",
                },
            },
        ],
    },
    {
        path: "/extend",
        name: "extend",
        meta: {
            title: "extend",
            icon: "",
        },
        children: [

            {
                path: "/extend/request",
                name: "request",
                meta: {
                    title: "网络/request",
                    icon: "i-ep-sort",
                },
            },
            {
                path: "/extend/socket",
                name: "socket",
                meta: {
                    title: "socket",
                    icon: "i-ep-link",
                },
            },
            
        ],
    },
]);

</script>
   
<style lang="scss" scoped>
.el-menu {
    background-color: transparent;
    margin-top: 30px;
}
    
.el-menu-vertical {
    text-align: left;
}
</style>