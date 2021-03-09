<template>
  <div class="MyTree">
    <!-- <my-tree/> -->
    <el-row class="tac">
      <el-col :span="24">
        <!-- <h5>自定义颜色</h5> -->
        <el-menu
            :uniqueOpened="true"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
          <el-menu-item v-for="(item,index) in routes" @click="go(item)">
            <i class="el-icon-setting"></i>
            <template #title >{{ item.routeName }}</template>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {routes} from "@/router";

export default {
  name: 'MyTree',
  data(){
    return {
      routes :routes

    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    go(item) {

      if(this.$store.state.openTab.indexOf(item.path)==-1){
        this.$store.commit('addOpenTab',item.path);
      }
      this.$store.commit('changTab',item.path)
      this.$router.push({path: this.$store.state.activeTab});

    }
  },
}
</script>
<style>
.MyTree {
  height: 100%;
}
.el-menu{
  border-right: 0!important;
}
</style>