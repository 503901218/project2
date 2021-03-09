<template>
<!-- 个人设置 -->
    <div class="Fathersetup">
        <div class="setup">
       <!-- <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="text-align:center;margin:0 auto;width: 100%;"> -->
       <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
  <el-form-item label="姓名" prop="name">
      <el-row>
          <el-col :span="18"><el-input  v-model="ruleForm.name"></el-input></el-col>
      </el-row>
  </el-form-item>
    <el-form-item label="工号" prop="num">
      <el-row>
          <el-col :span="18"><el-input  v-model="ruleForm.num"></el-input></el-col>
      </el-row>
  </el-form-item>
    <el-form-item label="部门" prop="dep">
      <el-row>
          <el-col :span="18"><el-input  v-model="ruleForm.dep"></el-input></el-col>
      </el-row>
  </el-form-item>
    <el-form-item label="上级名称" prop="leader">
      <el-row>
          <el-col :span="18"><el-input  v-model="ruleForm.leader"></el-input></el-col>
      </el-row>
  </el-form-item>
  




  <!-- <el-form-item label="工号" prop="region">
     <el-row>
          <el-col :span="18">
         
                  <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
          </el-col>

      </el-row>
    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item> -->
  <!-- <el-form-item label="活动时间" required>
    <el-col :span="10">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="10">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item> -->
  <!-- <el-form-item label="部门" prop="delivery">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item> -->
  <!-- <el-form-item label="活动性质" prop="type">
       <el-row>
          <el-col :span="20" > 
                <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
          </el-col>
       </el-row>

  </el-form-item> -->
  <!-- <el-form-item label="特殊资源" prop="resource">
    <el-radio-group v-model="ruleForm.resource" style="display:flex; align-items: center;">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item> -->
<!-- 
  <el-form-item label="活动形式" prop="desc">
       <el-row>
          <el-col :span="18"> <el-input type="textarea" v-model="ruleForm.desc"></el-input></el-col>
    </el-row>
   
  </el-form-item> -->

  <el-form-item style="margin:0!important">
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
        </div>
    </div>

</template>
<script>
export default {
    name:'setup',
    data() {
        return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            // 这个是失去焦点的时候，校验是否有值，如果没有会之间有校验提示
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2到 5 个字符', trigger: 'blur' }
          ],
          num: [
            { required: true, message: '工号不能为空'},
            { type: 'number', message: '工号必须为6位数字值'}
          ],
          dep: [
            {  type: 'array', required: true, message: '部门不能为空', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3到 5 个字符', trigger: 'blur' }
          ],
          leader: [
            { type: 'date', required: true, message: '上级不能为空', trigger: 'blur' },
             { min: 2, max: 5, message: '长度在 2到 5 个字符', trigger: 'blur' }
          ],
          // type: [
          //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          // ],
          // resource: [
          //   { required: true, message: '请选择活动资源', trigger: 'change' }
          // ],
          // desc: [
          //   { required: true, message: '请填写活动形式', trigger: 'blur' }
          // ]
        }
      };
    },
    methods: {
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style >
.demo-ruleForm{
  width: 100%;
  margin: 0 15%;
  text-align: center;
}
.Fathersetup{
  width: 100%;
  text-align: center;
}
.setup{
  width: 100%;
  display: flex;
  justify-content: center;
}

.el-form-item__content{
    margin: 0!important;
    flex: 1;
    align-items: center;
}
.el-form-item{
  margin-left: 13%;
  display: flex;
}
.el-select,.el-switch,.el-radio-group{
  float: left;
  width: 100%;
}
.el-checkbox-group,.el-radio-group{
  float: left;
}
.el-radio,.el-checkbox{
  line-height: 40px;
  float: left;
  align-items: center;
}

/* .el-checkbox{
  float: left;
} */
</style>