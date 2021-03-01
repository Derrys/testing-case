<template>
  <el-main>
    <el-card class="msg-card">
      <div slot="header">
        <span>用户管理</span>
      </div>
      <el-tabs type="card">
        <el-tab-pane v-for="(item, index) in userData" :key="index" :label="item.label">
          <vxe-table
        border
        :data="item.data"
      >
        <vxe-table-column
          field="date"
          title="时间"
          width="200"
        ></vxe-table-column>
        <vxe-table-column field="status" title="操作" width="200">
          <template slot-scope="{ row }">
            {{ row.status | statusTransferFilter }}
          </template>
        </vxe-table-column>
      </vxe-table>
      <vxe-pager
        v-if="total"
        background
        size="small"
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="[5, 10, 20, 50, 100]"
        :total="total"
        :layouts="[
          'PrevPage',
          'JumpNumber',
          'NextPage',
          'FullJump',
          'Sizes',
          'Total',
        ]"
        @page-change="changePage"
      >
      </vxe-pager>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </el-main>
</template>

<script>
export default {
  name: "UserManagement",
  components: {},
  data() {
    return {
      userData: [],
      pageSize: 10,
      currentPage: 1,
      total: 0,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    // 发请求获取消息数据
    loadData() {
      console.log("一页数量：", this.pageSize)
      console.log("当前页：", this.currentPage)
    },
    changePage({ currentPage, pageSize }) {
      this.currentPage = currentPage;
      this.pageSize = pageSize
      this.loadData()
    }
  },
};
</script>

<style lang="scss" scoped>
.el-main {
  height: calc(100vh - 50px);
  overflow: hidden;
  background-color: #f0f2f5;

  .msg-card {
    height: 100%;
    overflow: auto;

    .title-row {
      cursor: pointer;
    }
  }
}

.msg-table {
  margin-top: 32px;
}
</style>
