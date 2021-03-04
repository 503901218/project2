<template>
    <div>
        <div class="Myheader">
            <div class="logo">
            <img src="../../../assets/logo.png" alt="">
        </div>
    </div>

    <el-tabs class="TitleRight" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    </div>
 
</template>

<script>


export default {
  name: 'Myheader',
  data() {
      return {
           activeName: 'second'
      }
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
  },
 
}
</script>
<style scoped>
    .Myheader{
        /* display: flex; */
        background-color: pink;
        height: 100%;
    }

    .logo{
        float:left;
        align-items: center;
    }

    .logo img{
        height: 60px;
        /* width: 48px; */
        /* align-items: center; */
       
        /* overflow: hidden; */
    }

   .el-tabs__nav-scroll .el-tabs__nav{
        float: right!important;
        margin: 0 30px!important;
    }
</style>