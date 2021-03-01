<template>
  <el-container>
    <el-header>
      <el-button-group>
        <el-button
          type="primary"
          icon="el-icon-menu"
          @click.native="toggleExpand"
          >展开/折叠</el-button
        >
      </el-button-group>
      <el-input
        style="width: 250px"
        placeholder="请输入模块或用例名..."
        v-model="searchKey"
        @keyup.native="searchEvent"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-header>
    <el-main>
      <el-card>
        <div slot="header">
          <span>{{ caseName }}</span>
        </div>
        <el-tabs @tab-click="tabsClick" v-model="activeIndex">
          <el-tab-pane v-for="(item, index) of moduleData" :key="item.id">
            <span slot="label"
              >{{ item.moduleName + " (" + item.caseNum + ")" }}
            </span>
            <vxe-table
              show-overflow
              :ref="'xTree' + index"
              :tree-config="{ children: 'children', trigger: 'cell' }"
              max-height="550"
              :data="item.caseData"
            >
              <vxe-table-column
                title="编号"
                field="id"
                min-width="90px"
                tree-node
              ></vxe-table-column>
              <vxe-table-column
                field="title"
                title="标题"
                min-width="100px"
                :edit-render="{ name: 'input' }"
              ></vxe-table-column>
              <vxe-table-column
                field="level"
                title="等级/关键字"
                min-width="120px"
                :edit-render="{ name: 'input' }"
              ></vxe-table-column>
              <vxe-table-column
                field="description"
                min-width="140px"
                title="用例描述/步骤参数"
                :edit-render="{ name: 'input' }"
              ></vxe-table-column>
              <vxe-table-column
                field="author"
                title="作者"
                min-width="100px"
                :edit-render="{ name: 'input' }"
              ></vxe-table-column>
              <vxe-table-column
                field="status"
                title="状态"
                min-width="80px"
                sortable
                :edit-render="{ enabled: false }"
              >
                <template slot-scope="{ row }">
                  <el-tag :type="row.status | statusFilter">
                    {{ row.status | statusTransferFilter }}
                  </el-tag>
                </template>
              </vxe-table-column>
            </vxe-table>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import XEUtils from "xe-utils";
import Sortable from "sortablejs";

export default {
  name: "CaseDetail",
  components: {},
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
        notStart: "N/A",
        failed: "失败",
      };
      return statusMap[status];
    },
  },
  props: ["resultId"],
  data() {
    return {
      searchKey: "",
      activeIndex: "",
      caseName: "",
      moduleData: [],
      selectedData: [],
      listLoading: false,
      caseItemModalVisible: false,
      caseItemModel: {},
    };
  },
  created() {
    this.getCaseDetail();
  },
  methods: {
    getCaseDetail() {
      this.listLoading = true;
      setTimeout(() => {
        // 此处根据Id调用接口获取数据...
        console.log("详情ID: ", this.resultId);
        this.caseName = "项目一";
        this.moduleData = [
          {
            id: 1,
            moduleName: "模块一",
            caseNum: "23",
            caseData: [
              {
                id: 1,
                title: "用例1",
                level: "1",
                description: "测试用例1",
                author: "Will",
                status: "notStart",
                type: "case",
                children: [
                  {
                    id: 11,
                    title: "步骤1",
                    level: "click",
                    description: "//*[@id='su']",
                    author: "",
                    status: "success",
                    type: "step",
                  },
                  {
                    id: 12,
                    title: "步骤2",
                    level: "input",
                    description: "//*[@id='kw'",
                    author: "特斯汀学院",
                    status: "failed",
                    type: "step",
                  },
                ],
              },
              {
                id: 2,
                title: "用例2",
                level: "2",
                description: "测试用例12",
                author: "Will",
                type: "case",
                status: "success",
              },
              {
                id: 3,
                title: "用例名",
                level: "1",
                description: "测试用例1",
                author: "Roy",
                type: "case",
                status: "failed",
              },
              {
                id: 4,
                title: "用例4",
                level: "3",
                description: "测试用例3",
                author: "Roy",
                type: "case",
                status: "notStart",
                children: [
                  {
                    id: 31,
                    title: "步骤3",
                    level: "click",
                    description: "//*[@id='su']",
                    author: "",
                    type: "step",
                    status: "success",
                  },
                  {
                    id: 32,
                    title: "步骤4",
                    level: "input",
                    type: "step",
                    description: "//*[@id='kw'",
                    author: "特斯汀学院",
                    status: "failed",
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            moduleName: "模块二",
            caseNum: "20",
            caseData: [
              {
                id: 100,
                title: "用例100",
                level: "12",
                description: "测试用例100",
                author: "Will",
                status: "notStart",
                type: "case",
                children: [
                  {
                    id: 1011,
                    title: "步骤100",
                    level: "click",
                    description: "//*[@id='su']",
                    type: "step",
                    author: "",
                    status: "success",
                  },
                  {
                    id: 1012,
                    title: "步骤102",
                    level: "input",
                    description: "//*[@id='kw'",
                    type: "step",
                    author: "特斯汀学院",
                    status: "failed",
                  },
                ],
              },
              {
                id: 102,
                title: "用例2",
                level: "2",
                description: "测试用例12",
                author: "Will",
                type: "case",
                status: "success",
              },
              {
                id: 103,
                title: "用例名",
                level: "1",
                description: "测试用例1",
                author: "Roy",
                status: "failed",
                type: "case",
                children: [
                  {
                    id: 1031,
                    title: "步骤300",
                    level: "click",
                    description: "//*[@id='su']",
                    author: "",
                    type: "step",
                    status: "success",
                  },
                  {
                    id: 1032,
                    title: "步骤400",
                    level: "input",
                    description: "//*[@id='kw'",
                    author: "特斯汀学院",
                    type: "step",
                    status: "failed",
                  },
                ],
              },
              {
                id: 104,
                title: "用例4",
                level: "3",
                description: "测试用例3",
                type: "case",
                author: "Roy",
                status: "notStart",
              },
            ],
          },
        ];
        // 为筛选做准备
        this.moduleData.forEach((i) => {
          i.originData = [...i.caseData];
        });
        this.listLoading = false;
      }, 1000);
    },
    tabsClick(data) {
      console.log("切换Tabs!", data);
      const tableItem = this.$refs[`xTree${data.index}`][0];
      tableItem.reloadData(this.moduleData[data.index].caseData);
      tableItem.setAllTreeExpand(true);
      this.selectedData = [];
    },
    handleSearch() {
      const tableItem = this.moduleData[this.activeIndex];

      let searchKey = XEUtils.toString(this.searchKey).trim();
      if (searchKey) {
        let options = { children: "children" };
        let searchProps = ["title"];
        tableItem.caseData = [
          ...XEUtils.searchTree(
            tableItem.originData,
            (item) =>
              searchProps.some(
                (key) => XEUtils.toString(item[key]).indexOf(searchKey) > -1
              ),
            options
          ),
        ];
        // 搜索之后默认展开所有子节点
        this.$nextTick(() => {
          this.$refs[`xTree${this.activeIndex}`][0].setAllTreeExpand(true);
        });
      } else {
        tableItem.caseData = [...tableItem.originData];
      }
    },
    // 创建一个防反跳策略函数，调用频率间隔 500 毫秒
    searchEvent: XEUtils.debounce(
      function() {
        this.handleSearch();
      },
      500,
      { leading: false, trailing: true }
    ),
    toggleExpand() {
      const tableItem = this.$refs[`xTree${this.activeIndex}`][0];
      tableItem.getTreeExpandRecords().length
        ? tableItem.clearTreeExpand()
        : tableItem.setAllTreeExpand(true);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-main {
  background-color: #f0f2f5;
}
</style>
