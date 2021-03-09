import Vue from 'vue'
import Vuex from 'vuex'
import {routes} from "@/router";

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        openTab: [],
        activeTab: '/home'
    },
    mutations: {
        addOpenTab(state, path) {
            // 不选首页的时候，新增导航按钮，选首页展示首页home
            if(path!='/'){
                state.openTab.push(path)
            }
            state.activeTab = path
        },
        deleteTab(state, itemindex) {

            console.log(state.openTab)
            if (itemindex == 0) {
                state.activeTab = '/'
            } else if (itemindex == state.openTab.length - 1) {
                state.activeTab = state.openTab[itemindex - 1]
            } else {
                state.activeTab = state.openTab[itemindex + 1]
            }
            state.openTab.splice(itemindex, 1)
        },
        changTab(state, itemName) {
            state.activeTab = itemName
        }
    }
})
export default store