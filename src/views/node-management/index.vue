<template>
  <el-main>
    <el-card>
      <div slot="header">
        <span>节点管理</span>
      </div>
      <project-card
        @handlerAdd="addNode()"
        @handlerSelect="selectProject"
        @handlerOperate="operate"
        type="node"
      />
    </el-card>
  </el-main>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";

export default {
  name: 'NodeManagement',
  components: {
    ProjectCard
  },
  data() {
    return {
    }
  },
  methods: {
    addNode() {

    },
    selectProject() {

    },
    operate() {

    }
  }
}
</script>

<style lang="scss" scoped>
.el-main {
  height: calc(100vh - 50px);
  overflow: hidden;
  background-color: #f0f2f5;
}
</style>
