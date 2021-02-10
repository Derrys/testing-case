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
          <el-table-column label="序号" width="65">
            <template slot-scope="{ row }">
              <span>{{ row.id }}</span>
            </template>
          </el-table-column>

          <el-table-column label="模块名">
            <template slot-scope="{ row }">
              <span>{{
                row.moduleName
              }}</span>
            </template>
          </el-table-column>

          <el-table-column width="150px" label="作者">
            <template slot-scope="{ row }">
              <span>{{ row.author }}</span>
            </template>
          </el-table-column>

          <el-table-column width="150px" label="上次执行人">
            <template slot-scope="{ row }">
              <span>{{ row.lastName }}</span>
            </template>
          </el-table-column>

          <el-table-column width="150px" label="创建时间">
            <template slot-scope="{ row }">
              <span>{{
                row.createdTime | parseTime("{y}-{m}-{d} {h}:{i}")
              }}</span>
            </template>
          </el-table-column>

          <el-table-column label="执行时间" width="150">
            <template slot-scope="{ row }">
              <span>{{
                row.latestTime | parseTime("{y}-{m}-{d} {h}:{i}")
              }}</span>
            </template>
          </el-table-column>

          <el-table-column  label="模块状态" width="100">
            <template slot-scope="{ row }">
              <el-tag :type="row.status | statusFilter">
                {{ row.status }}
              </el-tag>
            </template>
          </el-table-column>

          <el-table-column label="操作" width="80">
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
import Sortable from 'sortablejs'
import ProjectCard from "@/components/ProjectCard";

export default {
  name: "Case",
  components: { ProjectCard },
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        notStart: 'warning',
        failed: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      searchKey: "",
      list: [],
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      sortable: null,
      oldList: [],
      newList: []
    };
  },
  created() {
    console.log('圈圈是个小可爱！')
    setTimeout(() => {
      this.list = [{
        id: 1,
        moduleName: 'dhj12',
        author: 'dhj12',
        lastName: '点点是个小可爱！',
        createdTime: 1612963806,
        latestTime: 1612963231,
        status: 'success'
      }]
      this.listLoading = false
      this.setSort()
    }, 2000)
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
    setSort() {
      const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
        setData: function(dataTransfer) {
          dataTransfer.setData('Text', '')
        },
        onEnd: evt => {
          const targetRow = this.list.splice(evt.oldIndex, 1)[0]
          this.list.splice(evt.newIndex, 0, targetRow)

          // for show the changes, you can delete in you code
          const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
          this.newList.splice(evt.newIndex, 0, tempIndex)
        }
      })
    }
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
