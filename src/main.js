import { createApp } from 'vue';
import Antd from 'ant-design-vue';

import App from './App.vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.config.productionTip = false;
import router from './router'

app.use(router);
app.use(Antd);
app.mount('#app');