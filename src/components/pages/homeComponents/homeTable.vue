<template>
  <div id="homeTable">
    <el-table
        height="250"
        :data="tableData"
        style="width: 100%" id="elTable">
      <el-table-column
          label="序号"
      >
        <template #default="scope">
          <!--          <i class="el-icon-time"></i>-->
          <span>{{ scope.$index }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="项目名"
      >
        <template #default="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.projectName }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="负责人"
      >
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top">
            <template #default>
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
            </template>
            <template #reference>
              <span>{{ scope.row.name }}</span>
              <!--              <div class="name-wrapper">-->
              <!--                <el-tag size="medium">{{ scope.row.name }}</el-tag>-->
              <!--              </div>-->
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
          label="项目进度"
      >
        <template #default="scope">
          <el-popover effect="light" placement="top">
            <!--            <template #default>-->
            <!--              <p>姓名: {{ scope.row.name }}</p>-->
            <!--              <p>住址: {{ scope.row.address }}</p>-->
            <!--            </template>-->
            <template #reference>
              <div class="name-wrapper">
                <el-tag size="medium">{{ scope.row.address }}</el-tag>
              </div>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
          label="开始时间"
      >
        <template #default="scope">
          <el-popover effect="light" placement="top">
            <!--            <template #default>-->
            <!--              <p>姓名: {{ scope.row.name }}</p>-->
            <!--              <p>住址: {{ scope.row.address }}</p>-->
            <!--            </template>-->
            <template #reference>
              <div class="name-wrapper">
                <el-tag size="medium">{{ scope.row.date }}</el-tag>
              </div>
            </template>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template #default="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>


export default {
  name: "homeTable",
  data() {
    return {
      tableData: [
          {
        projectName: '住房和城乡建设部科技计划项目',
        date: '2016-05-02',
        name: '王小虎',
        address: '80%'
      }, {
        projectName: '德州球场围网厂家定制',
        date: '2016-05-04',
        name: '王小虎',
        address: '70%'
      }, {
        projectName: '清远钢架拆除工程队、厂房、铁棚拆除施工、施工',
        date: '2016-05-01',
        name: '王小虎',
        address: '20%'
      }, {
        projectName: '广州钢结构拆除广州厂房彩瓦更换广州钢架防腐除锈',
        date: '2016-05-03',
        name: '王小虎',
        address: '40%'
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      // console.log(row);
      this.tableData.splice(index, 1)
    }
  }

}
</script>

<style>
#homeTable{
  overflow: auto!important;
}
.el-main {
  line-height: 0 !important;
  /*text-align: center;*/
}

.el-table td, .el-table th.is-leaf,
.el-table--enable-row-transition .el-table__body td {
  text-align: center;
}

#elTable {
  height: 270px;
  overflow: auto;
}

#elTable el-table_1_column_1 {
  /*flex: 1;*/
}
.el-table--enable-row-transition .el-table__body td{
  padding: 5px 0!important;
}
</style>