import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-plus/lib/theme-chalk/index.css';
import store from './store'
import Echarts from 'echarts'
import axios from "axios";

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$Echarts = Echarts
Vue.prototype.$axios = axios
new Vue({
    router,
    Echarts,
    store,
    axios,
    render: h => h(App)
}).$mount('#app')


// import { createApp } from 'vue'
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
// import App from './App.vue';

// const app = createApp(App)
// app.use(ElementPlus)
// app.mount('#app')