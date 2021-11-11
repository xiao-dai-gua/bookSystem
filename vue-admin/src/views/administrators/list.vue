<template>
    <div>
        <el-table
      :data="dataList"
      style="width: 100%">
      <el-table-column
        prop="jrid"
        label="序号"
        ><!--传入的数据data prop是data下的属性值-->
      </el-table-column>
      <el-table-column
        prop="levelname"
        label="图书管理员"
      >
      </el-table-column>
        <el-table-column
      fixed="right"
      label="操作"
      ><!--去掉宽度  往下拉能看见属性作用-->
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deletepeople(scope.row, dataList)"
          type="text"
          size="small"><!--给组件绑定一定要加native-->
          移除
        </el-button>
      </template>
    </el-table-column>
    </el-table>
    </div>
</template>
<script>
    import {getPeople,delPeople} from '../../api/level'
    export default{
        data(){
            return{
               dataList:[]
            }
        },
        created() {
            this.getData()
        },
        methods: {
            //删除列表
            deletepeople(item){
                delPeople({
                    levelid:item.jrid
                }).then((res)=>{
                     this.getData();//删除成功之后重新获取一次数据
                })
            },
            //获取等级列表
            getData(){
               getPeople().then((res)=>{
                   this.dataList = res.data
               })
        },
    }
    }
</script>
<style scoped>
   
</style>