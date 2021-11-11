<template>
  <div class="content" v-loading="loading">
    <el-row>
      <el-col :span="6" :offset="6">
        <el-form
          :model="peopleForm"
          ref="numberValidateForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item
            label="姓名"
            prop="peopleName"
            :rules="[
              { required: true, message: '请填写姓名' },
            ]"
          >
            <el-input
              v-model="peopleForm.peopleName"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('numberValidateForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('numberValidateForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {addPeople} from "../../api/level"
export default {
  data() {
    return {
        loading:false,
        peopleForm:{
            peopleName:""
        }
    };
  },
  beforeRouteEnter (to, from, next) {
    if(from.name == "LevelList"){
      next();
    }
  },
  beforeRouteLeave (to, from, next) {
    if(this.peopleForm.peopleName){
      this.$confirm('当前有未提交的内容，确定跳转?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          next();
        }).catch(() => {
                    
        });
    }else{
      next();
    }
    // ...
    // console.log(to, from, next);
    // next();
  },
  methods: {
    //  添加等级
    submitForm(formName) {
        this.loading = true;
      this.$refs[formName].validate((valid) => {
        if (valid) {
            addPeople({
                levelname:this.peopleForm.peopleName
            }).then((res)=>{//添加成功回调
                this.loading = false;
                this.$router.push('/administrators/list')
            })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
        // this.levelForm.levelName = ""
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>

.content{
    margin-top: 100px;
}    
</style>
