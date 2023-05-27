import { createApp } from 'vue'
import App from './App.vue'

import "~/styles/index.scss";

import ElementPlus from 'element-plus'
import router from './router'
import { createPinia } from 'pinia'

import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(createPinia());

app.mount("#app");