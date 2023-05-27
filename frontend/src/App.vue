<template>
  <el-config-provider namespace="el">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts" setup>

import { setThemeColor } from './utils/theme'

//设置主题色
setThemeColor('#bd34fe')

</script>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>
