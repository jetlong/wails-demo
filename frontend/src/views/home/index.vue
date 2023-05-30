<template>
    <div class='content'>
        <el-card class='mb-2' shadow='hover'>
            <el-row>
                <el-col :xs='24' :md='16'>
                    <div class='flex items-center'>
                        <div class='pr-4 flex items-center'>
                            <el-avatar class='w-16 h-16'
                                :src='user?.avatar || ""' />
                        </div>
                        <div>
                            <div class='text-xl'>你好，{{ user?.nickname || '-' }} ，祝你开心每一天！</div>
                            <div class='text-sm text-gray-400 pt-2'>如果你把每一天都当成生命里的最后一天，你将在这一天发现，原来一切皆在掌握之中。</div>
                        </div>
                    </div>
                </el-col>
                <el-col :xs='24' :md='8'>
                    <div class='flex items-center flex-row-reverse'>
                        <div class='px-1 text-center'>
                            <div class='text-sm text-gray-400 pb-2'>访问量</div>
                            <div class='text-xl'>3,344</div>
                        </div>
                        <el-divider direction='vertical' class='h-8' />
                        <div class='px-1 text-center'>
                            <div class='text-sm text-gray-400 pb-2'>排名</div>
                            <div class='text-xl'>1/100</div>
                        </div>
                        <el-divider direction='vertical' class='h-8' />
                        <div class='px-1 text-center'>
                            <div class='text-sm text-gray-400 pb-2'>项目数量</div>
                            <div class='text-xl'>100</div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-card>

        <el-row :gutter='15'>
            <el-col :md='24' :lg='16'>
1111
            </el-col>

            <el-col :md='24' :lg='8'>
                <el-card shadow='hover' class='mb-2'>
                    <template #header>
                        <div class='card-header flex justify-between items-center'>
                            <span>快速开始</span>
                        </div>
                    </template>
                    <div class='flex flex-wrap'>
                        <div v-for='o in 7' :key='o' class='p-1'>
                            <el-tag>{{ '操作 ' + o }}</el-tag>
                        </div>
                    </div>
                </el-card>

            </el-col>
        </el-row>
    </div>
</template>
  
<script lang="ts" setup>

import { ref, onMounted } from "vue"
import { userStore } from "~/stores/userStore"

const user = ref(null);

onMounted(() => {

    // 从pinia状态里获取用户信息
    user.value=userStore();


});

</script>
  