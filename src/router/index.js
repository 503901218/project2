import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        routeName:'首页',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        routeName:'about页',
        name: 'About',
        component: () => import('../components/pages/About.vue')
    },
    // {
    //     path: '/index',
    //     routeName:'index页',
    //     name: 'index',
    //     component: () => import('../components/pages/About.vue')
    // },
    {
        path: '/page1',
        routeName:'page1页',
        name: 'page1',
        component: () => import('../components/pages/page1.vue')
    },
    {
        path: '/page2',
        routeName:'page2页',
        name: 'page2',
        component: () => import('../components/pages/page2.vue')
    },
    {
        path: '/page3',
        routeName:'page3页',
        name: 'page3',
        component: () => import('../components/pages/page3.vue')
    },
    {
        path: '/page4',
        routeName:'page4页',
        name: 'page4',
        component: () => import('../components/pages/page4.vue')
    },
    {
        path: '/page5',
        routeName:'page5页',
        name: 'page5',
        component: () => import('../components/pages/page5.vue')
    },
    {
        path: '/page6',
        routeName:'page6页',
        name: 'page6',
        component: () => import('../components/pages/page6.vue')
    },
    {
        path: '/page7',
        routeName:'page7页',
        name: 'page7',
        component: () => import('../components/pages/page7.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

export {routes}
