<template>
    <div class="box">
        <!--ref是html获取元素整个组件标签如下获得add-->
        <!-- <div ref="add"></div> -->
        <el-form :model="addressForm" ref="Formaddress" label-width="100px">
   <el-form-item
    prop="addressname"
    label="阅览室地址"
    :rules="[
      { required: true, message: '请输入正确地址' },
    ]"
  >
    <el-input v-model="addressForm.addressname"></el-input>
  </el-form-item>
     <el-form-item
    prop="latitude"
    label="纬度"
    :rules="[
      { required: true, message: '请输入正确纬度' },
        { type: 'number', message: '纬度必须为数字值'}
    ]"
  >
  <!--此处number对应上面规则的-->
    <el-input v-model.number="addressForm.latitude"></el-input>
  </el-form-item>
   <el-form-item
    prop="longitude"
    label="经度"
    :rules="[
      { required: true, message: '请输入正确经度' },
        { type: 'number', message: '经度必须为数字值'}
    ]"
  >
    <el-input v-model.number="addressForm.longitude"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button v-loading="loading" type="primary" @click="submitForm('Formaddress')">提交</el-button>
    <el-button @click="resetForm('Formaddress')">重置</el-button>
  </el-form-item>
</el-form>
    </div>
</template>
 
<script>
    import {addAddress} from '../../api/address'
  export default {
    data() {
      return {
        loading: false,
        addressForm: {
          longitude:'',
          latitude:'',
          addressname: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
         this.loading = true
         //验证当前表单是否生效   注意这里validate相当于then
        this.$refs[formName].validate((res) => {
              this.loading = false;
              addAddress({
              adddres:this.addressForm.addressname,
              longitude:this.addressForm.longitude,
              latitude:this.addressForm.latitude}).then((res)=>{
                  console.log(res);
                  this.$router.push("/list_address");
              })
          
        }) 
        
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>
<style scoped>
    .box{
        width: 400px;
        margin:auto;
        margin-top: 150px;
    }
</style>