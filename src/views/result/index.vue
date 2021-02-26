<template>
  <router-view v-if="isResultDetail" :key="$route.path" />
  <el-container v-else>
    <el-header style="text-align: right; font-size: 12px">
      <el-input
        style="width: 200px"
        placeholder="请输入搜索内容..."
        v-model="searchKey"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-header>
    <el-main>
      <project-card
        @handlerSelect="selectProject"
        @handlerOperate="operate"
        :showAdd="false"
        type="result"
      />
      <el-row>
        <el-card class="module-card" style="width: 200px;float: left">
          <div slot="header" class="module-header">
            <span>{{ `执行记录（${recordList.length}）` }}</span>
          </div>
          <el-table
            ref="recordTable"
            :data="recordList"
            row-key="id"
            fit
            highlight-current-row
            @current-change="handleCurrentChange"
          >
            <el-table-column label="序号" width="65">
              <template slot-scope="{ row }">
                <span>{{ row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="{ row }">
                <icon-button
                  icon="el-icon-delete"
                  tips="删除记录"
                  size="small"
                  @click.native="deleteRecord(row)"
                />
              </template>
            </el-table-column>
          </el-table>
        </el-card>
        <div class="transfer-wrap">
           <i class="el-icon-d-arrow-right" />
        </div>
        <el-card class="module-card">
          <div slot="header" class="module-header">
            <span>{{ "模块详情（" + list.length + "）" }}</span>
          </div>
          <el-table
            v-loading="listLoading"
            :data="list"
            row-key="id"
            fit
            highlight-current-row
            style="width: 100%"
          >
            <el-table-column label="序号" width="65">
              <template slot-scope="{ row }">
                <span>{{ row.id }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="100px" label="模块名">
              <template slot-scope="{ row }">
                <span :title="row.moduleName">{{ row.moduleName }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="100px" label="作者">
              <template slot-scope="{ row }">
                <span>{{ row.author }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="150px" label="上次执行人">
              <template slot-scope="{ row }">
                <span>{{ row.lastName }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="140" label="创建时间">
              <template slot-scope="{ row }">
                <span>{{
                  row.createdTime | parseTime("{y}-{m}-{d} {h}:{i}")
                }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="140" label="执行时间">
              <template slot-scope="{ row }">
                <span>{{
                  row.latestTime | parseTime("{y}-{m}-{d} {h}:{i}")
                }}</span>
              </template>
            </el-table-column>

            <el-table-column width="100" label="模块状态">
              <template slot-scope="{ row }">
                <el-tag :type="row.status | statusFilter">
                  {{ row.status | statusTransferFilter }}
                </el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
import IconButton from "@/components/IconButton";

export default {
  name: "Result",
  components: { ProjectCard, IconButton },
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: "success",
        notStart: "warning",
        failed: "danger",
      };
      return statusMap[status];
    },
    statusTransferFilter(status) {
      const statusMap = {
        success: "通过",
        notStart: "未运行",
        failed: "失败",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      isResultDetail: this.$route.path !== "/result/index",
      searchKey: "",
      recordList: [],
      list: [],
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
      },
    };
  },
  created() {
    if (!this.isResultDetail) {
      setTimeout(() => {
        this.recordList = [
          {
            id: 1,
            data: [
              {
                id: 1,
                moduleName: "dhj12",
                author: "dhj12",
                lastName: "点点是个小可爱！",
                createdTime: 1612963806,
                latestTime: 1612963231,
                status: "success",
                isOpen: true,
                edit: false,
              },
              {
                id: 2,
                moduleName: "dhj12",
                author: "dhj12",
                lastName: "圈圈是个小可爱！",
                createdTime: 1612963806,
                latestTime: 1612963231,
                status: "notStart",
                isOpen: false,
                edit: false,
              },
              {
                id: 3,
                moduleName: "dhj12",
                author: "dhj12",
                lastName: "大家都是个小可爱！",
                createdTime: 1612963806,
                latestTime: 1612963231,
                status: "failed",
                isOpen: false,
                edit: false,
              },
            ],
          },
          {
            id: 2,
            data: [
              {
                id: 21,
                moduleName: "dhj12",
                author: "dhj12",
                lastName: "狂风",
                createdTime: 1612963806,
                latestTime: 1612963231,
                status: "success",
                isOpen: true,
                edit: false,
              },
              {
                id: 22,
                moduleName: "dhj12",
                author: "dhj12",
                lastName: "暴雨",
                createdTime: 1612963806,
                latestTime: 1612963231,
                status: "notStart",
                isOpen: false,
                edit: false,
              },
            ],
          },
          { id: 3, data: [] },
        ];
        this.$refs.recordTable.setCurrentRow(this.recordList[0]);
        this.listLoading = false;
      }, 1000);
    }
  },
  methods: {
    handleCurrentChange(recordData) {
      console.log(`点击了第${recordData.id}行!`);
      this.list = [...recordData.data];
    },
    deleteRecord(row) {
      this.$confirm(`你确定要删除第 ${row.id} 条记录吗?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log("删除的记录为: ", row);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    selectProject(item) {
      console.log("选中项目: ", item);
    },
    operate(data) {
      console.log("点击操作: ", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  color: #333;
  line-height: 60px;
}

.el-main {
  height: calc(100vh - 110px);
  background-color: #f0f2f5;

  .module-card {
    height: calc(100vh - 385px);
    margin-top: 32px;
    & ::v-deep .el-card__body {
      height: calc(100vh - 458px);
      overflow-y: scroll;
    }
    .module-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .transfer-wrap {
    float: left;
    margin-top: 32px;
    height: calc(100vh - 385px);
    padding: 0 30px;
    display: flex;
    align-items: center;

    i {
      font-weight: 600;
    }
  }
}
</style>
