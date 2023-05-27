<template>
    <el-container class="layout-container" style="height: 100vh">
        <el-aside width="200px">
            <el-scrollbar>
                <Logo></Logo>
                <Menu></Menu>
            </el-scrollbar>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <div class="toolbar">
                    <el-dropdown>
                        <el-icon style="margin-right: 8px; margin-top: 1px">
                            <setting />
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>View</el-dropdown-item>
                                <el-dropdown-item>Add</el-dropdown-item>
                                <el-dropdown-item>Delete</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span>Tom</span>
                </div>
            </el-header>

            <el-main>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
        </el-container>
    </el-container>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'

const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>
  
<style scoped>
.layout-container .el-header {
    position: relative;
    background-color: var(--el-color-info-light-9);
    color: var(--el-text-color-primary);
}

.layout-container .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-info-light-9);
}

.layout-container .el-menu {
    border-right: none;
}

.layout-container .el-main {
    text-align: left;
}
.layout-container .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}</style>
  