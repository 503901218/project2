<template>
  <div class="menu" name="Mymenu">
    <el-container>
        <el-header><my-header/></el-header>
    <el-container>
        <el-aside width="200px"><my-tree/></el-aside>
        <el-container>
            <el-main><my-con/></el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
    </el-container>



    <my-tree/>
    <my-con/>
    <my-header/>
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
