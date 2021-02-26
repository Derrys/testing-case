<template>
  <router-view v-if="isCaseDetail" :key="$route.path" />
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
        @handlerAdd="addProject()"
        @handlerSelect="selectProject"
        @handlerOperate="operate"
      />
      <el-card class="module-card">
        <div slot="header" class="module-header">
          <span>模块详情</span>
          <el-button size="medium" type="primary" @click.native="saveList" icon="el-icon-box"
            >保存</el-button
          >
        </div>
        <el-table
          ref="dragTable"
          v-loading="listLoading"
          :data="list"
          row-key="id"
          fit
          style="width: 100%"
        >
          <el-table-column label="序号" width="65">
            <template slot-scope="{ row }">
              <span>{{ row.id }}</span>
            </template>
          </el-table-column>

          <el-table-column min-width="250px" label="模块名">
            <template slot-scope="{ row }">
              <template v-if="row.edit">
                <el-input v-model="row.moduleName" class="edit-input">
                  <el-button
                    slot="prepend"
                    icon="el-icon-close"
                    @click="cancelEditName(row)"
                  ></el-button>
                  <el-button
                    slot="append"
                    type="primary"
                    icon="el-icon-check"
                    @click="row.edit = false"
                  ></el-button>
                </el-input>
              </template>
              <span :title="row.moduleName" v-else @click="toEditName(row)" style="cursor: pointer;">{{
                row.moduleName
              }}</span>
            </template>
          </el-table-column>

          <el-table-column min-width="200px" label="作者">
            <template slot-scope="{ row }">
              <span>{{ row.author }}</span>
            </template>
          </el-table-column>

          <el-table-column min-width="200px" label="上次执行人">
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

          <el-table-column width="70" label="操作">
            <template slot-scope="{ row }">
              <el-switch v-model="row.isOpen"> </el-switch>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-main>
    <el-dialog :title="caseItemModel.id ? '编辑项目' : '创建项目'" :visible.sync="caseItemModalVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="caseItemModel"
        label-position="left"
        label-width="100px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="照片" prop="img">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
          >
            <img
              v-if="caseItemModel.img"
              :src="caseItemModel.img"
              class="avatar"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="标题" prop="name">
          <el-input v-model="caseItemModel.name"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="caseItemModel.description"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="caseItemModalVisible = false">
          取消
        </el-button>
        <el-button
          type="primary"
          @click="caseItemModel.id ? updateData() : createData()"
        >
          确定
        </el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
import Sortable from "sortablejs";
import ProjectCard from "@/components/ProjectCard";

export default {
  name: "Case",
  components: { ProjectCard },
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
      isCaseDetail: this.$route.path !== '/case/index',
      searchKey: "",
      list: [],
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
      },
      sortable: null,
      caseItemModalVisible: false,
      caseItemModel: {},
      rules: {
        img: [
          { required: true, message: "请上传照片!", trigger: "change" },
        ],
        name: [
          { required: true, message: "标题是必填项!", trigger: "blur" },
        ],
        description: [
          { required: true, message: "描述是必填项!", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    if (!this.isCaseDetail) {
       setTimeout(() => {
      this.list = [
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
      ];
      this.listLoading = false;
      this.setSort();
    }, 1000);
    }
   
  },
  methods: {
    addProject() {
      console.log("添加项目");
      this.caseItemModel = {}
      this.caseItemModalVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    selectProject(item) {
      console.log("选中项目: ", item);
    },
    operate(data) {
      console.log("点击操作: ", data);
      switch (data.type) {
        case "delete":
          this.$confirm(`你确定要删除 ${data.item.name} ?`, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          })
            .then(() => {
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
          break;
        case "edit":
          this.caseItemModel = {...data.item}
          this.caseItemModalVisible = true
          this.$nextTick(() => {
            this.$refs['dataForm'].clearValidate()
          })
          break;
        case "editDetail":
          this.$router.push(`/case/index/case-detail/${data.item.id}`)
          break;
        case "run":
          break;
        default:
          break;
      }
    },
    toEditName(row) {
      row.originalModuleName = row.moduleName;
      row.edit = true;
    },
    cancelEditName(row) {
      row.moduleName = row.originalModuleName;
      row.edit = false;
    },
    saveList() {
      alert("保存列表");
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          alert("创建项目");
        }
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          alert("更新项目");
        }
      })
    },
    setSort() {
      const el = this.$refs.dragTable.$el.querySelectorAll(
        ".el-table__body-wrapper > table > tbody"
      )[0];
      this.sortable = Sortable.create(el, {
        ghostClass: "sortable-ghost", // Class name for the drop placeholder,
        setData: function(dataTransfer) {
          dataTransfer.setData("Text", "");
        },
        onEnd: (evt) => {
          const targetRow = this.list.splice(evt.oldIndex, 1)[0];
          this.list.splice(evt.newIndex, 0, targetRow);
        },
      });
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
  overflow: hidden;
  background-color: #f0f2f5;

  .module-card {
    height: calc(100vh - 385px);
    margin-top: 32px;
    & ::v-deep .el-card__body {
      height: calc(100vh - 458px);
      overflow-y: auto;
    }
    .module-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.avatar-uploader ::v-deep .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader ::v-deep .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
