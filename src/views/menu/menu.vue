
<template>
  <div class="menu" name="Mymenu">
    <!-- <el-container >
        <el-header class="Title"><my-header/></el-header>
    <el-container>
        <el-aside width="200px"><my-tree/></el-aside>
        <el-container>
            <el-main><my-con/></el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
    </el-container> -->

    <el-container>
        <el-aside class="tree" width="200px" ><my-tree/></el-aside>
        <el-container>
            <el-header class="Title">Header<my-header/></el-header>
            <el-main><my-con/></el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>


    <!-- <my-tree/>
    <my-con/>
    <my-header/> -->
  </div>
</template>

<script>
import MyTree from './tree/tree';
import MyCon from './container/container'
import MyHeader from './header/header'

export default {
  name: 'MyMenu',
  components:{
    MyTree,
    MyCon,
    MyHeader
  }
}
</script>
<style scoped>
    .Title{
        width: 100%;
        padding: 0!important;
    }
    .tree{
        height: 100%;
        background-color: pink;
    }
     .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
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


    /* .headerlogo{
        display: flex;
    }
    .logoitem{
        align-items: center;
    } */
</style>