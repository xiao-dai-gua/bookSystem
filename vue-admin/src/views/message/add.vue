<template>
    <div class="box">
       <el-row :gutter="20">
        <el-col :span="6" >
            <!--这个model和下面的结合形成data里的数据模式-->
            <el-form :model="messageForm" ref="messageForm" label-width="100px" class="demo-ruleForm">
            <el-form-item
                label="书名"
                prop="uname"
                :rules="[
                { required: true, message: '请填写书名'},
                ]"
            >
                <el-input  v-model="messageForm.uname"></el-input>
            </el-form-item>
            <el-form-item
                label="编号"
                prop="tel"
                :rules="[
                { required: true, message: '请填写图书编号'},
                ]"
            >
                <el-input  v-model="messageForm.tel"></el-input>
            </el-form-item>
            <!--地址选择-->
            <el-form-item label="选择阅览室">
                <el-select v-model="messageForm.addressid" placeholder="请选择阅览室">
                    <!--加上冒号是v-bind的简写绑定属性-->
                <el-option v-for="item in address" :key="item.addressid" :label="item.addressname" :value="item.addressid"></el-option>
                </el-select>
            </el-form-item>
            <!--等级-->
            <el-form-item label="选择管理员">
                <el-select v-model="messageForm.levelid" placeholder="请选择管理员"><!--:表示不让他按字符串处理-->
                <el-option v-for="item in levelList" :key="item.jrid" :label="item.levelname" :value="item.jrid"></el-option>
                </el-select>
            </el-form-item>
             <!--上传头像-->
            <el-form-item label="上传图片">
                <el-upload
                    class="upload-demo"
                    action="http://47.92.82.13:4000/getMessageA"
                    :file-list="fileList"
                    name="sfile"
                    :on-success="headUpload"
                    ><!--更改文件名字-->
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
            </el-form-item>
            <el-form-item label="上传二维码">
                <el-upload
                    class="upload-demo"
                    action="http://47.92.82.13:4000/getMessageB"
                    :file-list="fileList"
                    name = "sweixin"
                    :on-success="wxUpload"
                    >
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button v-if="updata" type="primary" @click="UpdateMessageHandle('messageForm')">修改</el-button>
                <el-button v-else type="primary" @click="addMessageHandle('messageForm')">提交</el-button>
                <el-button @click="resetForm('messageForm')">重置</el-button>
            </el-form-item>
            </el-form>
        </el-col>
        </el-row>
    </div>
</template>
<script>
import {getAddress} from '../../api/address'
import { getLevel } from '../../api/level'
import { addMessage,messageid, updateMessage } from '../../api/message'
    export default{
        data(){
            return{
                messageForm:{
                    uname:"",
                    tel:"",
                    levelid:"",
                    addressid:"",
                    tcoin:"",
                    weixin:""
                },
                levelList:[],
                address:[],
                fileList:[],
                updata:false
            }
        },
        created() {
            // console.log(this.$route.query)
            if(this.$route.query.id){
                this.updata = true,
                this.getMessageid()
            }
            // console.log(this.$route.params)//可以输出页面之间传递的参数
            this.initPage();
            // this.getLevelData()
            // this.getAddressData()
        },
        methods: {
            //修改信息
            UpdateMessageHandle(){
                let {uname,addressid,levelid,tel} = this.messageForm;
                updateMessage({
                    id:this.$route.query.id,
                    uname,
                    addressid,
                    levelid,
                    tel
                }).then((res)=>{
                    console.log(res);
                    this.$router.push('/message/list')
                })
            },
            //根据Id获取信息
            getMessageid(){
                messageid({
                    id:this.$route.query.id
                }).then((res)=>{
                    this.messageForm = {
                    jrname:res.data[0].jrname,
                    jrtel:res.data[0].jrtel,
                    levelid:res.data[0].jrlevel,
                    addressid:res.data[0].jraddressesid,
                    tcoin:res.data[0].tcoin,
                    weixin:res.data[0].weixin
                    }
                })
            },
            //添加信息
            addMessageHandle(formName){
                this.$refs[formName].validate((res)=>{
                    if(res){
                        addMessage({...this.messageForm}).then((res)=>{
                            console.log(res)
                        })
                    }
                })
            },
            //获取等级列表
            getLevelData(){
                return new Promise((resolve,reject)=>{
                    getLevel().then((res)=>{
                    this.levelList = res.data
                    resolve();//成功之后让其运行

})
                    })
            },
            //获取地址
            getAddressData(){
                return new  Promise((resolve,reject)=>{
                     getAddress().then((res)=>{
                    this.address = res.data,
                    resolve();
                })
                })
            },
            //头像上传成功
            headUpload(res,file,files){
                this.messageForm.tcoin = res.headerurl;
            },
             //微信二维码上传成功
           wxUpload(res) {
                this.messageForm.weixin = res.weixinurl;
    },
         //初始化页面
            initPage() {
                console.log("开始加载页面")
                let addressPromise = this.getAddressData()
                let levelPromise = this.getLevelData()
                Promise.all([levelPromise,addressPromise]).then(()=>{
                    console.log("结束加载页面")
                });
            },
        },
       

    }
</script>
<style>
    .box{
        margin-left: 100px;
        margin-top:100px;

    }
</style>