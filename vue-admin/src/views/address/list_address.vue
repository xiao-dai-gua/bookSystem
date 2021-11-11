<template>
  <div>
    <el-table v-loading="loading" :data="dataList" style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="addressname" label="图书地址"> </el-table-column>
      <el-table-column prop="longitude" label="地址经度"> </el-table-column>
      <el-table-column prop="latitude" label="地址纬度"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteAddress(scope.row)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getAddress, delAddress } from "@/api/address";
export default {
  data() {
    return {
      dataList: [],
      loading: false,
    };
  },
  methods: {
    // 获取地址
    getData() {
      this.loading = true;
      getAddress().then((res) => {
        this.dataList = res.data;
        this.loading = false;
      });
    },
    // 删除地址
    deleteAddress(item) {
      this.loading = true;
      delAddress({
        addressid: item.addressid,
      }).then(() => {
        this.loading = false;
        this.getData();
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>
