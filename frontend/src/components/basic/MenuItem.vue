<template>
    <template v-for="item in menuList" :key="item.path">

        <template v-if="item.children && item.children.length > 0">

            <el-menu-item-group>
                <template #title><span>{{ item.meta.title }}</span></template>
                <!-- 递归调用，将子菜单传递给组件处理 -->
                <menu-item :menuList="item.children"></menu-item>

            </el-menu-item-group>

        </template>

        <template v-else>
            <el-menu-item :index="item.path">
                <el-icon><i :class="item.meta.icon"></i></el-icon>
                <span>{{ item.meta.title }}</span>
            </el-menu-item>
        </template>

    </template>
</template>
   
<script setup lang="ts">

// 子组件接受父组件传递的数据
// 本组件为子组件，接受父组件传过来的数据，此处定义menuList属性，接受父组件传递的menuList数据
defineProps(["menuList"]);

</script>
   
<style lang="scss" scoped>
.el-menu-item {
    width: 90%;
    margin: auto;
    height: 40px;
    border-radius: 6px;
    margin-top: 1px;
}

.el-menu-item:hover,.el-menu-item.is-active {
    background-color:var(--el-color-primary);
    color:white
}
</style>