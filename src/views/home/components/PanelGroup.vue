<template>
  <el-row :gutter="32" class="panel-group">
    <el-col :xs="24" :sm="12" :lg="8" class="card-panel-col">
      <el-card shadow="hover" class="card-wrap" @click.native="routeTo('node')">
          <div class="icon-wrap">
            <i class="el-icon-crop" />
          </div>
          <div class="text-wrap">
            <count-to
              :start-val="0"
              :end-val="2"
              :duration="2800"
              class="card-panel-num"
            />
            <div class="text-item">节点</div>
          </div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :lg="8" class="card-panel-col">
      <el-card shadow="hover" class="card-wrap" @click="routeTo('case')">
          <div class="icon-wrap">
            <i class="el-icon-tickets" />
          </div>
          <div class="text-wrap">
            <count-to
              :start-val="0"
              :end-val="22"
              :duration="3000"
              class="card-panel-num"
            />
            <div class="text-item">用例</div>
          </div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :lg="8" class="card-panel-col">
      <el-card shadow="hover" class="card-wrap" @click="routeTo('result')">
          <div class="icon-wrap">
           <i class="el-icon-document" />
          </div>
          <div class="text-wrap">
            <count-to
              :start-val="0"
              :end-val="54"
              :duration="3200"
              class="card-panel-num"
            />
            <div class="text-item">报告</div>
          </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from "vue-count-to";

export default {
  components: {
    CountTo,
  },
  methods: {
    routeTo(type) {
      console.log(type)
      switch(type) {
        case 'node':
          this.$router.push('/node/index')
          break;
        case 'case':
          this.$router.push('/case/index')
          break;
        case 'result':
          this.$router.push('/result/index')
          break;
        default: 
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.panel-group {
  .card-panel-col {
    margin-bottom: 32px;

    .icon-wrap {
      width: 64px;
      height: 64px;
      display: flex;
      float: left;
      align-items: center;
      justify-content: center;
      border: 1px solid #ccc;
      border-radius: 32px;
      i {
        font-size: 30px;
      }
    }
    .text-wrap {
      margin-left: 80px;
      height: 64px;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .card-panel-num {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}
</style>
