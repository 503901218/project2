<template>
  <div id="app">

    <el-form v-if="!this.$store.state.isLogin" :model="loginForm" status-icon  ref="loginForm" label-width="100px" class="demo-ruleForm">
<!--    <el-form  :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">-->
      <el-form-item label="ID" >
        <el-input type="text" v-model="loginForm.loginId" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" >
        <el-input type="password" v-model="loginForm.loginPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="checkLogin">登陆</el-button>
        <el-button @click="">取消</el-button>
      </el-form-item>
    </el-form>


    <div v-else class="menu" name="Mymenu">
      <el-container>
        <el-aside class="tree" width="200px">
          <my-tree/>
        </el-aside>
        <el-container>
          <!-- <el-header class="Title">Header<my-header/> -->
          <el-header class="Title">
            <my-header/>
          </el-header>
          <div style="display: flex">
            <el-button  @click="clickTabBtn('/')" style="border: solid 1px; border-bottom:none;border-radius: 0">home</el-button>
            <el-button v-for="(item,index) in this.$store.state.openTab"
                       style="border: solid 1px; border-bottom:none;border-radius: 0"
                       @click="clickTabBtn(item)">
              {{item}}<i class="el-icon-close" @click="closeBtn(index)"></i>
            </el-button>
          </div>
          <el-main>
<!--            <div>-->

              <router-view/>
<!--            </div>-->
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>

    </div>

  </div>
</template>
<script>
import MyTree from './views/menu/tree/tree';
import MyCon from './views/menu/container/container'
import MyHeader from './views/menu/header/header'
import {routes} from "@/router";
import login from "@/network/login";

export default {
  name: 'App',
  data() {
    return {
      activeName: 'second',
      loginForm: {}
    }
  },
  components: {
    MyTree,
    MyCon,
    MyHeader
  },
  methods: {




    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      }
      if (action === 'remove') {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tabs.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tabs.name !== targetName);
      }
    },
    closeBtn(index){
      console.log(index)
      this.$store.commit('deleteTab',index)
      this.$router.push({path:this.$store.state.activeTab});
    },
    clickTabBtn(path){

      this.$store.commit('changTab',path)
      this.$router.push({path:this.$store.state.activeTab});
      console.log(this.$store.state.activeTab)
    },
    checkLogin(){
      this.$axios.post('/login',{
        ...this.loginForm
      }).then(res=>{
        console.log(res)
        alert("登陆成功")
      }).then(req=>{
        alert("登陆失败")
      })
    }
  }

}
</script>
<style>
body, html, #app, .home, .menu, .menu .el-container {
  height: 100%;

}

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


.Title {
  width: 100%;
  padding: 0 !important;
}

.tree {
  /* height: 600px; */
  background-color: pink;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 40px;
  height: 40px!important;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;

  padding:0!important;
  padding-top: 5px!important;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/*header*/

.el-tabs__nav-wrap {
  display: flex !important;
  justify-content: flex-end !important;
  padding: 0 30px;
}

/* tree */
.tac {
  height: 100%;
  background-color: rgb(84, 92, 100);
}
.el-button{
  padding: 6px 14px!important;
  min-height: 28px!important;
}


/*登陆床*/
.el-form-item,.demo-ruleForm{
  margin: 0!important;
}
</style>
