<template>
  <el-main>
    <el-card class="user-card">
      <div slot="header">
        <span>用户管理</span>
      </div>
      <el-row>
        <el-col :md="6" class="user-search">
          <el-input placeholder="请输入用户名..." v-model="keywords">
            <el-button
              slot="append"
              icon="el-icon-search"
              @click.native="searchMsg"
            ></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-tabs type="card" v-model="activeTab" @tab-click="tabClick">
        <el-tab-pane
          v-for="(item, index) in userData"
          :key="index"
          :label="`${item.label}（${item.data.length}）`"
        >
          <vxe-table border :data="item.data" :ref="`msgTable${index}`">
            <vxe-table-column
              field="account"
              title="账号"
              width="200"
            ></vxe-table-column>
            <vxe-table-column field="name" title="姓名" min-width="150"></vxe-table-column>
            <vxe-table-column
              field="department"
              title="部门"
              width="150"
            ></vxe-table-column>
            <vxe-table-column
              field="job"
              title="职位"
              width="150"
            ></vxe-table-column>
            <vxe-table-column
              field="date"
              title="创建时间"
              width="200"
            ></vxe-table-column>
            <vxe-table-column
              field="sex"
              title="性别"
              width="100"
            ></vxe-table-column>
            <vxe-table-column
              field="phone"
              title="手机"
              width="200"
            ></vxe-table-column>
            <vxe-table-column
              field="email"
              title="邮箱"
              width="200"
            ></vxe-table-column>
            <vxe-table-column title="操作" width="200">
              <template slot-scope="{ row }">
                <el-select v-model="row.type" placeholder="请选择" @change="changeType(row)">
                  <el-option
                    v-for="item in typeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
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
      activeTab: 0,
      keywords: "",
      userData: [],
      pageSize: 10,
      currentPage: 1,
      total: 0,
      typeOptions: [
        {
          label: "管理员",
          value: "admin",
        },
        {
          label: "游客",
          value: "guest",
        },
      ],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    // 发请求获取消息数据
    loadData() {
      console.log("一页数量：", this.pageSize);
      console.log("当前页：", this.currentPage);
      console.log("关键字：", this.keywords);
      setTimeout(() => {
        this.userData = [
          {
            label: "全部",
            data: [
              {
                account: "测试账号1",
                name: "张三",
                department: "前端",
                job: "架构师",
                date: "2021-3-2",
                sex: "男",
                phone: "13022223333",
                email: "test@qq.com",
                type: "admin",
              },
              {
                account: "测试账号2",
                name: "李四",
                department: "后端",
                job: "码农",
                date: "2021-2-28",
                sex: "男",
                phone: "13022223334",
                email: "test1@qq.com",
                type: "guest",
              },
            ],
          },
          {
            label: "申请",
            data: [
              {
                account: "测试账号3",
                name: "王五",
                department: "测试",
                job: "老板",
                date: "2021-1-1",
                sex: "女",
                phone: "13022223334",
                email: "test1@qq.com",
                type: "admin",
              },
            ],
          },
        ];
        this.total = this.userData[this.activeTab].data.length;
      }, 1000);
    },
    changePage({ currentPage, pageSize }) {
      this.currentPage = currentPage;
      this.pageSize = pageSize;
      this.loadData();
    },
    searchMsg() {
      this.loadData();
    },
    tabClick() {
      this.total = this.userData[this.activeTab].data.length;
      this.currentPage = 1;
      this.currentPage = 10;
      this.$refs[`msgTable${this.activeTab}`][0].syncData()
    },
    changeType(row) {
      console.log("切换状态为：", row)
    }
  },
};
</script>

<style lang="scss" scoped>
.el-main {
  height: calc(100vh - 50px);
  overflow: hidden;
  background-color: #f0f2f5;

  .user-card {
    height: 100%;
    overflow: auto;

    .user-search {
      margin-bottom: 24px;
    }
  }
}
</style>
