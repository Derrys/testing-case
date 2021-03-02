<template>
  <div class="card-wrap">
    <el-card
      v-if="showAdd"
      shadow="hover"
      class="box-card card-add"
      @click.native="add()"
    >
      <div class="card-add-content">
        <i class="el-icon-circle-plus-outline" />
      </div>
    </el-card>
    <el-card
      :shadow="item.active ? 'always' : 'hover'"
      :class="['box-card', { active: item.active }]"
      v-for="item in cardList"
      :key="item.id"
      @click.native="selectCard($event, item)"
    >
      <div :class="['card-status', item.status]"></div>
      <div class="card-header">
        <img width="100px" height="60px" :src="item.img" />
        <div class="header-text">
          <div :title="item.name" class="title">{{ item.name }}</div>
          <span :title="item.description">{{ item.description }}</span>
        </div>
      </div>
      <div class="card-content">
        <span>模块数:</span>
        {{ item.moduleNum }}
      </div>
      <div class="card-content">
        <span>用例数:</span>
        {{ item.caseNum }}
      </div>
      <div :class="['card-footer', {'card-result-footer': type === 'result'}]">
        <!-- 这里你去根据 type=node 去判断下节点管理里的操作按钮 -->
        <div v-if="type === 'result'">
          <icon-button
            icon="el-icon-view"
            tips="查看详细结果"
            style="margin-left: 15px"
            @click.native="operate('view', item)"
          />
        </div>
        <template v-else>
          <icon-button
            icon="el-icon-edit"
            tips="编辑"
            @click.native="operate('edit', item)"
          />
          <icon-button
            icon="el-icon-delete"
            tips="删除"
            @click.native="operate('delete', item)"
          />
          <icon-button
            icon="el-icon-s-promotion"
            tips="运行"
            @click.native="operate('run', item)"
          />
          <icon-button
            icon="el-icon-edit-outline"
            tips="编辑详细用例"
            @click.native="operate('editDetail', item)"
          />
        </template>
      </div>
    </el-card>
  </div>
</template>

<script>
import IconButton from "@/components/IconButton";

export default {
  name: "ProjectCard",
  components: { IconButton },
  props: {
    showAdd: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "case",
    },
  },
  data() {
    return {
      cardList: [
        {
          id: "1",
          name: "项目一",
          description: "这是项目一",
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          moduleNum: 7,
          caseNum: 99,
          status: "success",
        },
        {
          id: "2",
          name: "项目二",
          description: "这是项目二",
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          moduleNum: 10,
          caseNum: 26,
          status: "failed",
        },
        {
          id: "3",
          name: "项目三,我的名字很长很长...",
          description: "这是项目三",
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          moduleNum: 5,
          caseNum: 33,
          status: "notStart",
        },
        {
          id: "4",
          name: "项目四",
          description:
            "这是项目四，我有很长很长很长的文本，阿哈哈哈哈，来换行吧！！！两行以后就缩略咯====---#332",
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          moduleNum: 9,
          caseNum: 14,
          status: "success",
        },
      ],
    };
  },
  created() {
    this.cardList[0].active = true;
  },
  methods: {
    add() {
      this.$emit("handlerAdd");
    },
    selectCard($event, item) {
      if ($event.target.className.indexOf("icon-item") == -1) {
        this.cardList.forEach((item) => {
          item.active = false;
        });
        item.active = true;
        this.cardList = [...this.cardList];
        this.$emit("handlerSelect", item);
      }
    },
    operate(type, item) {
      this.$emit("handlerOperate", { type, item });
    },
  },
};
</script>

<style lang="scss" scoped>
.card-wrap {
  background-color: #ffffff;
  white-space: nowrap;
  overflow-x: scroll;
  padding: 8px;

  .box-card {
    width: 280px;
    display: inline-block;
    margin-right: 16px;
    position: relative;
    &.active {
      background-color: rgb(217, 236, 255);
    }
    &.card-add {
      height: 175px;
      cursor: pointer;
      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
      .card-add-content {
        height: 135px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #5a5e66;
        i {
          font-size: 36px;
        }
      }
    }
    .card-status {
      width: 46px;
      height: 20px;
      line-height: 20px;
      position: absolute;
      top: 0px;
      right: 0px;
      font-size: 12px;
      text-align: center;
      color: white;

      &.success {
        background-color: #67c23a;
        &::before {
          content: "通过";
        }
      }
      &.failed {
        background-color: #f56c6c;
        &::before {
          content: "失败";
        }
      }
      &.notStart {
        background-color: #e6a23c;
        &::before {
          content: "未运行";
        }
      }
    }
    .card-header {
      height: 60px;
      margin-bottom: 7px;
      img {
        float: left;
      }
      .header-text {
        margin-left: 110px;
        font-size: 12px;
        color: #909399;

        .title {
          color: #303133;
          font-size: 20px;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 20px;
          margin-bottom: 8px;
        }
        span {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 16px;
          white-space: normal;
        }
      }
    }
    .card-content {
      width: 50%;
      display: inline-block;
      font-size: 14px;
      font-weight: 500;
      color: #606266;
      span {
        font-size: 12px;
        color: #909399;
        font-weight: normal;
      }
    }
    .card-footer {
      margin: 7px -20px -20px;
      height: 60px;
      background-color: #f1f4f7;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .card-result-footer {
      justify-content: unset;
    }
  }
}
</style>
