<template>
  <el-main>
    <el-card class="msg-card">
      <div slot="header">
        <span>消息管理</span>
      </div>
      <el-radio-group v-model="msgType" @change="setDataFilter">
        <el-radio-button label="all">全部</el-radio-button>
        <el-radio-button label="unread">未读</el-radio-button>
        <el-radio-button label="readed">已读</el-radio-button>
      </el-radio-group>
      <el-button-group style="float: right">
        <el-button
          icon="el-icon-folder"
          @click.native="readMsg"
          :disabled="selectedData.length === 0"
          >标记已读</el-button
        >
        <el-button
          icon="el-icon-delete"
          @click.native="deleteMsg"
          :disabled="selectedData.length === 0"
          >删除</el-button
        >
        <el-button icon="el-icon-folder-opened" @click.native="readAllMsg"
          >全部已读</el-button
        >
        <el-button icon="el-icon-delete-solid" @click.native="deleteAllMsg"
          >全部删除</el-button
        >
      </el-button-group>
      <vxe-table
        border
        class="msg-table"
        ref="msgTable"
        :data="showTableData"
        :checkbox-config="{ trigger: 'cell' }"
        :expand-config="{ trigger: 'cell', showIcon: false, accordion: true }"
        @toggle-row-expand="showContent"
        @checkbox-all="selectChangeEvent"
        @checkbox-change="selectChangeEvent"
      >
        <vxe-table-column type="checkbox" width="60"></vxe-table-column>
        <vxe-table-column type="expand" title="标题内容">
          <template slot-scope="{ row }">
            <el-badge
              :is-dot="true"
              class="title-row"
              :hidden="row.status === 'readed'"
            >
              {{ row.title }}
            </el-badge>
          </template>
          <template v-slot:content="{ row }">
            {{ row.content }}
          </template>
        </vxe-table-column>
        <vxe-table-column
          field="date"
          title="时间"
          width="200"
        ></vxe-table-column>
        <vxe-table-column field="status" title="状态" width="150">
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
    </el-card>
  </el-main>
</template>

<script>
export default {
  name: "MessageManagement",
  components: {},
  data() {
    return {
      msgType: "all",
      msgData: [],
      showTableData: [],
      selectedData: [],
      pageSize: 10,
      currentPage: 1,
      total: 0,
    };
  },
  filters: {
    statusTransferFilter(status) {
      const statusMap = {
        unread: "未读",
        readed: "已读",
      };
      return statusMap[status];
    },
  },
  created() {
    this.loadData();
  },
  methods: {
    // 发请求获取消息数据
    loadData() {
      console.log("一页数量：", this.pageSize)
      console.log("当前页：", this.currentPage)
      setTimeout(() => {
        this.msgData = [
          {
            id: 1,
            title: "你的<档案标题名字>已经借阅提交成功！",
            content: "这是一段内容文本...!!!",
            date: "2020-3-2",
            status: "unread",
          },
          {
            id: 2,
            title: "你的<档案标题名字>已经借阅提交成功！",
            content: "这是一段内容文本...!!!",
            date: "2020-3-2",
            status: "unread",
          },
          {
            id: 3,
            title: "你的<档案标题名字>已经借阅提交成功！",
            content: "这是一段内容文本...!!!",
            date: "2020-3-2",
            status: "unread",
          },
          {
            id: 4,
            title: "你的<档案标题名字>已经借阅提交成功！",
            content: "这是一段内容文本...!!!",
            date: "2020-3-2",
            status: "readed",
          },
          {
            id: 5,
            title: "你的<档案标题名字>已经借阅提交成功！",
            content: "这是一段内容文本...!!!",
            date: "2020-3-2",
            status: "readed",
          },
          {
            id: 6,
            title: "你的<档案标题名字>已经借阅提交成功！",
            content: "这是一段内容文本...!!!",
            date: "2020-3-2",
            status: "readed",
          },
        ];
        this.setDataFilter();
      }, 1000);
    },
    setDataFilter() {
      this.showTableData = [
        ...this.msgData.filter((item) => {
          return this.msgType === "all" || item.status === this.msgType;
        }),
      ];
      this.total = this.showTableData.length
    },
    selectChangeEvent(data) {
      this.selectedData = [...data.records];
    },
    showContent(data) {
      if (data.expanded === true) {
        console.log("展开行: ", data);
        if (data.row.status === "unread") {
          //TODO 发请求标记为已读
          data.row.status = "readed";
        }
      }
    },
    readMsg() {
      console.log("已读内容为: ", this.selectedData);
      //TODO 发请求标记为已读, 操作完后 loadData()
    },
    readAllMsg() {
      console.log("全部已读: ", this.msgData);
      //TODO 发请求标记为全部已读
    },
    deleteMsg() {
      console.log("删除内容为: ", this.selectedData);
      //TODO 发请求删除
    },
    deleteAllMsg() {
      console.log("全部删除: ", this.msgData);
      //TODO 发请求全部删除
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
