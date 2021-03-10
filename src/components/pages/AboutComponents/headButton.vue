<template>
  <div class="headBotton">
    <el-row>
      <el-button type="primary" plain @click="dialogFormVisible = true"><i class="el-icon-thumb">添加</i></el-button>
      <el-button type="primary" plain><i class="el-icon-edit" @click="editOne()">编辑</i></el-button>
      <el-button type="primary" plain><i class="el-icon-delete" @click="deleteOne()">删除</i></el-button>
      <el-button type="primary" plain><i class="el-icon-download" @click="donwOne()">导出</i></el-button>


    </el-row>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "headButton",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    addOne() {
      console.log("click add")
    },
    editOne() {
      console.log("click add")
    },
    deleteOne() {
      console.log("click add")
    },
    downOne() {
      console.log("click add")
    },
  }
}
</script>

<style scoped>
.el-row {
  padding: 15px;
}

.el-row .el-button {
  /*padding: 3px 10px!important;*/
  font-size: 12px;
  font-weight: 700;

}

.el-row i::after {
  padding: 0 5px;
}
.el-form-item{
  margin-left: 0;
}

</style>