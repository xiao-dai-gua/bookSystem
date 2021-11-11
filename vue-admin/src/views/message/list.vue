<template>
    <div>
        <!--inline是否在同行-->
    <el-form :inline="true">
        <el-form-item label="选择阅览室">
            <!--框里面输入的值用searchAddress接收-->
            <el-select v-model="searchAddress" placeholder="请选择阅览室">
                <!--加冒号等于v-bind缩写 绑定属性-->
             <el-option v-for="item in addressList" :key="item.addressid" :label="item.addressname" :value="item.addressid"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button @click="resetForm">重置</el-button>
    </el-form-item>
</el-form>
        <el-table
      :data="messageList"
      style="width: 100%">
      <el-table-column
      type="index"
     >
      </el-table-column>
      <el-table-column
        prop="jrname"
        label="图书名称"
        >
      </el-table-column>
      <el-table-column
        prop="addressname"
        label="阅览室地址"
       >
      </el-table-column>
       <el-table-column
        prop="levelname"
        label="管理员姓名">
      </el-table-column>
       <el-table-column
        prop="jrtel"
        label="图书编号">
       </el-table-column>
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click.native.prevent="updateBtn(scope.row)">修改</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">移除</el-button>
      </template>
    </el-table-column>
    </el-table>
    </div>
</template>
<script>
import { getAddress } from '../../api/address'
import { delMessage, getMessage, messageAddress} from '../../api/message'
    export default {
      data() {
        return {
            messageList:[],
            searchAddress:"",
             addressList:[]
           }
        
      },
    methods: {
        //获取地址
        getAddressList(){
            getAddress().then((res)=>{
                this.addressList = res.data
            })
        },
        //重置表单
        resetForm(){
           this.searchAddress="",
           this.getMessageData();
        },
        //查询表单
        onSubmit(){
             let address = "";
             //map遍历一
            this.addressList.map((item)=>{
            if(item.addressid == this.searchAddress){
                address = item.addressname;
            }
        })
        //查询表单遍历输出
        messageAddress({
            searchid:this.searchAddress
        }).then((res)=>{
            console.log(res);
            this.messageList = res.data.map((item)=>{
                 item.addressname = address;
                 return item
            })
            // this.messageData = res.data;
 
        })

        },
        //获取信息
        getMessageData(){
            getMessage().then((res)=>{
               this.messageList = res.data
            })
        },
        //删除消息
        handleDelete(index, row) {
         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           delMessage({
            id:row.jrid
        }).then((res)=>{
            this.getMessageData();
        })
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        },
        //修改信息
         updateBtn(item){
             console.log(item)
             //此种方法刷新页面之后传入的值就不见了
            //  this.$router.push({
            //      name:"add",
            //      params:{
            //          id:item.jrid
            //      }

            //  })
            
            //此种方法刷新页面之后传入的值不会不见
            this.$router.push({
                path:"/message/add",
                query:{
                    id:item.jrid
                }
            })
        },
       },
        created() {
        this.getMessageData();
        this.getAddressList();
         },
    }
</script>

