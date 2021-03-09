import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-plus/lib/theme-chalk/index.css';
import store from './store'
import Echarts from 'echarts'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$Echarts = Echarts
new Vue({
    router,
    Echarts,
    store,
    render: h => h(App)
}).$mount('#app')


// import { createApp } from 'vue'
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
// import App from './App.vue';

// const app = createApp(App)
// app.use(ElementPlus)
// app.mount('#app')