<template>
  <div>
    <!--    <head-button style="height: 8vh"/>-->
    <!--    <div class="about" style="height: 76vh;overflow-y: auto">-->
    <!--      <about-table/>-->
    <!--    </div>-->
    <div class="headBotton" style="height: 8vh">
      <el-row>
        <el-table   :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"style="height: 30px;display: inline-block;width: 200px;padding: 0;">
          <el-table-column
              align="right" style="height: 100%;">
            <template slot="header" slot-scope="scope">
              <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
            </template>
          </el-table-column>
        </el-table>

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
    <div class="AboutTable" style="height: 76vh;overflow-y: auto">
      <el-table
          height="76vh"
          ref="multipleTable"
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            label="日期"
            width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="120">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
        </el-table-column>
<!--        <el-table-column-->
<!--            align="right" style="height: 100%;">-->
<!--          <template slot="header" slot-scope="scope">-->
<!--            <el-input-->
<!--                v-model="search"-->
<!--                size="mini"-->
<!--                placeholder="输入关键字搜索"/>-->
<!--          </template>-->
<!--        </el-table-column>-->
      </el-table>
      <!--    <div style="margin-top: 20px">-->
      <!--      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>-->
      <!--      <el-button @click="toggleSelection()">取消选择</el-button>-->
      <!--    </div>-->
    </div>
  </div>

</template>
<script>
// import AboutTable from "@/components/pages/AboutComponents/AboutTable";
// import headButton from "@/components/pages/AboutComponents/headButton";
import {getAboutDate} from "@/network/aboutRequest";

export default {
  name: 'About',
  data() {
    return {
      // netdata
      name:'',
      // headBotton
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
      formLabelWidth: '120px',
      //headtable
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王明',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: [],
      search: ''

    }
  },
  methods:{
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
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  components: {
    // AboutTable,
    // headButton,
  },
  created() {
    getAboutDate().then(res=>{
      this.name=res;

      console.log(this.name)
    })
  }
}
</script>
<style >
.about {
  height: 100%;
  background-color: orange;
}
.el-table td, .el-table th{
  padding: 0!important;
}
.is-right,.cell{
  /*padding: 0!important;*/
}
.el-input__inner{
  border: 1px solid #409EFF;
}
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
/*table*/
.about  td,.el-main  th {
  padding: 0!important;
  /*background-color: palevioletred;*/
}

</style>