<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-input style="width: 200px" placeholder="请输入内容" v-model="searchKey">
      <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Case",
  components: {},
  data() {
    return {
      searchKey: ''
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.el-header {
  color: #333;
  line-height: 60px;
}

.el-main {
  background-color: #f0f2f5;
}
</style>
