<template>
  <el-container>
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
        @handlerAdd="addProject()"
        @handlerSelect="selectProject"
        @handlerOperate="operate"
      />
      <el-card class="module-card">
        <div slot="header" class="module-header">
          <span>模块详情</span>
          <el-button size="medium" type="primary">保存</el-button>
        </div>
        <el-table
          ref="dragTable"
          v-loading="listLoading"
          :data="list"
          row-key="id"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column align="center" label="ID" width="65">
            <template slot-scope="{ row }">
              <span>{{ row.id }}</span>
            </template>
          </el-table-column>

          <el-table-column width="180px" align="center" label="Date">
            <template slot-scope="{ row }">
              <span>{{
                row.timestamp | parseTime("{y}-{m}-{d} {h}:{i}")
              }}</span>
            </template>
          </el-table-column>

          <el-table-column min-width="300px" label="Title">
            <template slot-scope="{ row }">
              <span>{{ row.title }}</span>
            </template>
          </el-table-column>

          <el-table-column width="110px" align="center" label="Author">
            <template slot-scope="{ row }">
              <span>{{ row.author }}</span>
            </template>
          </el-table-column>

          <el-table-column width="100px" label="Importance">
            <template slot-scope="{ row }">
              <svg-icon
                v-for="n in +row.importance"
                :key="n"
                icon-class="star"
                class="icon-star"
              />
            </template>
          </el-table-column>

          <el-table-column align="center" label="Readings" width="95">
            <template slot-scope="{ row }">
              <span>{{ row.pageviews }}</span>
            </template>
          </el-table-column>

          <el-table-column class-name="status-col" label="Status" width="110">
            <template slot-scope="{ row }">
              <el-tag :type="row.status | statusFilter">
                {{ row.status }}
              </el-tag>
            </template>
          </el-table-column>

          <el-table-column align="center" label="Drag" width="80">
            <template slot-scope="{}">
              <svg-icon class="drag-handler" icon-class="drag" />
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";

export default {
  name: "Case",
  components: { ProjectCard },
  data() {
    return {
      searchKey: "",
    };
  },
  methods: {
    addProject() {
      console.log("添加项目");
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
  background-color: #f0f2f5;

  .module-card {
    margin-top: 32px;
    .module-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
