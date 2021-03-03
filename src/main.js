// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import ElementUI from 'element-ui'


// Vue.config.productionTip = false
// Vue.use(ElementUI)
// new Vue({
//   router,

//   render: h => h(App)
// }).$mount('#app')





import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')