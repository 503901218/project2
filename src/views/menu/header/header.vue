<template>
    <div class="TitleRight">
       
        <!-- <el-tabs  v-model="activeName" @tab-click="handleClick">
                   
                    <el-tab-pane label="个人设置" name="first">
                        <router-link to="/about">About</router-link>
                        <setup/>
                    </el-tab-pane>
                    <el-tab-pane label="修改密码" name="second">
                        <password/>
                    </el-tab-pane>
                    <el-tab-pane label="角色管理" name="third"><router-link to="/about">About</router-link>角色管理</el-tab-pane>
                    <el-tab-pane label="退出" name="fourth">退出</el-tab-pane>

        </el-tabs> -->
    </div>
</template>

<script>
import setup from './SetUp/setup'
import password from './password/password.vue'
export default {
  name: 'Myheader',
  data() {
      return {
        //   默认打开
           activeName: 'first'
      }
  },
  components:{
      setup,
      password,
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
        /*background-color: pink;*/
        height: 100%;
    }
    .el-tabs__nav-wrap{
        margin-bottom: 20px!important;
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