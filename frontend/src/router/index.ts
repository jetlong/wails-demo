import { createRouter, createWebHistory } from "vue-router"

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {
        path: '/',
        name: 'Root',
        component: () => import('~/layouts/default.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('~/views/home/index.vue')
            }
        ],
    },
    {
        path: '/runtime',
        name: 'runtime',
        component: () => import('~/layouts/default.vue'),
        redirect: '/runtime/dialog',
        children: [
            {
                path: '/runtime/dialog',
                name: 'dialog',
                component: () => import('~/views/runtime/dialog.vue')
            },
            {
                path: '/runtime/clipboard',
                name: 'clipboard',
                component: () => import('~/views/runtime/clipboard.vue')
            },
            {
                path: '/runtime/menu',
                name: 'menu',
                component: () => import('~/views/runtime/menu.vue')
            },
            {
                path: '/runtime/log',
                name: 'log',
                component: () => import('~/views/runtime/log.vue')
            },
            {
                path: '/runtime/event',
                name: 'event',
                component: () => import('~/views/runtime/event.vue')
            },
            {
                path: '/runtime/window',
                name: 'window',
                component: () => import('~/views/runtime/window.vue')
            },
        ],
    },
    {
        path: '/extend',
        name: 'extend',
        component: () => import('~/layouts/default.vue'),
        redirect: '/extend/request',
        children: [
            {
                path: '/extend/request',
                name: 'request',
                component: () => import('~/views/extend/request.vue')
            },
            {
                path: '/extend/socket',
                name: 'socket',
                component: () => import('~/views/extend/socket.vue')
            },
        ],
    },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

export default router