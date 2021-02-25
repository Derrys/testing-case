<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="32">
      <el-col class="title-col">
        <div class="title-wrap">
          <div class="title">
            今日,
          </div>
          <div class="date-content">
            {{ date + welcomeText }}
          </div>
          <iframe
            width="400"
            height="25"
            frameborder="0"
            scrolling="no"
            hspace="0"
            src="https://i.tianqi.com/?c=code&id=40"
          ></iframe>
        </div>
        <panel-group />
      </el-col>
    </el-row>
    <el-row>
      <el-card class="message-wrap" shadow="never">
        <div slot="header">
          <span class="message-header">消息管理</span>
        </div>
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item
            v-for="(item, index) in messageList"
            :key="index"
            :name="item.id"
          >
            <template slot="title">
              <div class="message-title">
                <span>{{ item.title }}</span>
                <div>{{ item.time }}</div>
              </div>
            </template>
            {{ item.content }}
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <div class="chart-text-wrap">
            <div class="message-header">用例总数</div>
            <p>3000<span>件</span></p>
          </div>
          <bar-chart :width="'80%'" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <div class="chart-text-wrap">
            <div class="message-header">最近执行</div>
            <p>8<span>个</span></p>
          </div>
          <pie-chart :width="'80%'" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <div class="chart-text-wrap">
            <div class="message-header">执行统计</div>
            <p>2000<span>次</span></p>
          </div>
          <line-chart :width="'80%'" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from "./components/PanelGroup";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";

export default {
  name: "Home",
  components: {
    PanelGroup,
    LineChart,
    PieChart,
    BarChart,
  },
  data() {
    return {
      date: this.getDate(),
      welcomeText: ", 欢迎您使用档案控制台",
      activeName: 1,
      messageList: [
        {
          id: "1",
          title: "关于5.1劳动节放假通知",
          time: "2020-04-25",
          content:
            "集团各部门(中心)，分公司：2020年五一劳动节即将来临，根据国家相关规定，现将放假事宜安排如下：一，放假时间安排2020年...",
        },
        {
          id: "2",
          title: "关于省领导即将来视察",
          time: "2020-05-25",
          content:
            "集团各部门(中心)，分公司：2020年五一劳动节即将来临，根据国家相关规定，现将放假事宜安排如下：一，放假时间安排2020年...",
        },
        {
          id: "3",
          title: "关于元旦节放假通知",
          time: "2020-12-25",
          content:
            "集团各部门(中心)，分公司：2020年五一劳动节即将来临，根据国家相关规定，现将放假事宜安排如下：一，放假时间安排2020年...",
        },
        {
          id: "4",
          title: "关于春节通知",
          time: "2021-01-25",
          content:
            "集团各部门(中心)，分公司：2020年五一劳动节即将来临，根据国家相关规定，现将放假事宜安排如下：一，放假时间安排2020年...",
        },
      ],
    };
  },
  methods: {
    getDate() {
      const weekDayLabels = new Array(
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      );
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const currentime =
        year + "年" + month + "月" + day + "日" + weekDayLabels[now.getDay()];
      return currentime;
    },
  },
};
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
    padding: 16px 16px 32px 16px;
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;

    .chart-text-wrap {
      position: relative;
      width: 20%;
      text-align: center;
      .message-header {
        text-align: left;
      }
      p {
        margin-top: 100%;
        span {
          font-size: 12px;
          margin-left: 7px;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }

  .title-col {
    flex-direction: column;
  }
}

.title-col {
  display: flex;
  justify-content: space-between;

  .title-wrap {
    margin-bottom: 32px;
    .title {
      font-size: 30px;
      font-weight: 500;
    }
  }
}

.date-content {
  margin: 12px 0 9px 0;
  font-size: 14px;
  font-family: Arial;
}

.message-header {
  font-weight: bold;
}

.message-wrap {
  margin-bottom: 32px;
  .message-title {
    width: 100%;
    div {
      float: right;
      margin-right: 10px;
    }
  }
}
</style>
