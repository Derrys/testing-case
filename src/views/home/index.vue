<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="16">
        <div class="title">
          今日,
        </div>
        <div class="date-content">
          {{ date + welcomeText }}
        </div>
        <iframe width="400" height="25" frameborder="0" scrolling="no" hspace="0" src="https://i.tianqi.com/?c=code&id=40"></iframe>
        </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
         <panel-group/>
      </el-col>
    </el-row>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'Home',
  components: {
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      date: this.getDate(),
      welcomeText: ', 欢迎您使用档案控制台'
    }
  },
  methods: {
    getDate() {
      const weekDayLabels = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
      const now = new Date();
      const year=now.getFullYear();
      const month=now.getMonth()+1;
      const day=now.getDate()
      const currentime = year+'年'+month+'月'+day+'日'+weekDayLabels[now.getDay()]
      return currentime
    },
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}

.title {
  font-size: 30px;
  font-weight: 500;
}

.date-content {
  margin: 12px 0 9px 0;
  font-size: 14px;
  font-family: Arial;
}
</style>
