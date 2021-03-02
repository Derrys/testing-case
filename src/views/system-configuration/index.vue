<template>
  <el-main>
    <el-card class="system-card">
      <div slot="header" class="card-header">
        <span>平台配置</span>
        <el-button
          size="medium"
          type="primary"
          @click.native="savePlatForm"
          icon="el-icon-box"
          >保存</el-button
        >
      </div>
      <el-form
        :model="platForm"
        :rules="platRules"
        ref="platForm"
        label-width="100px"
      >
        <el-row :gutter="32">
          <el-col :sm="12" :xl="8">
            <el-form-item label="平台Logo: " prop="logo">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
              >
                <img v-if="platForm.logo" :src="platForm.logo" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :xl="8">
            <el-form-item label="平台名字: " prop="name">
              <el-input v-model="platForm.name" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="system-card">
      <div slot="header" class="card-header">
        <span>邮件配置</span>
        <el-button-group>
          <el-button
          size="medium"
          type="primary"
          @click.native="sendTestEmail"
          icon="el-icon-box"
          >发送测试邮件</el-button
        >
        <el-button
          size="medium"
          type="primary"
          @click.native="saveEmailForm"
          icon="el-icon-box"
          >保存</el-button
        >
        </el-button-group>
      </div>
      <el-form
        :model="emailForm"
        :rules="emailRules"
        ref="emailForm"
        label-width="120px"
      >
        <el-row :gutter="32">
          <el-col :sm="12" :xl="8">
            <el-form-item label="smtp服务器: " prop="smtpSever">
              <el-input v-model="emailForm.smtpSever" placeholder="请输入smtp服务器..."/>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :xl="8">
            <el-form-item label="smtp端口: " prop="smtpPort">
              <el-input v-model="emailForm.smtpPort" placeholder="请输入smtp端口..."/>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :xl="8">
            <el-form-item label="发件人邮箱: " prop="email">
              <el-input v-model="emailForm.email" placeholder="请输入发件人邮箱..."/>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :xl="8">
            <el-form-item label="密码: " prop="password">
              <el-input v-model="emailForm.password" placeholder="请输入密码..."/>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :xl="8">
            <el-form-item label="发件人昵称: " prop="nickname">
              <el-input v-model="emailForm.nickname" placeholder="请输入发件人昵称..."/>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :xl="8">
            <el-form-item label="收件人列表: " prop="receiveList">
              <el-input v-model="emailForm.email" placeholder="请输入收件人..."/>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :xl="8">
            <el-form-item label="抄送列表: " prop="ccList">
              <el-input v-model="emailForm.email" placeholder="请输入抄送人..."/>
            </el-form-item>
          </el-col>

        </el-row>
      </el-form>
    </el-card>
  </el-main>
</template>

<script>
export default {
  name: "SystemConfiguration",
  components: {},
  data() {
    return {
      platForm: {},
      platRules: {
        logo: [{ required: true, message: "请上传Logo!", trigger: "change" }],
        name: [
          { required: true, message: "平台名字是必填项!", trigger: "blur" },
        ],
      },
      emailForm: {},
      emailRules: {
        smtpSever: [{ required: true, message: "smtp服务器是必填项!", trigger: "blur" }],
        smtpPort: [{ required: true, message: "smtp端口是必填项!", trigger: "blur" }],
        email: [{ required: true, message: "发件人邮箱是必填项!", trigger: "blur" }],
        password: [{ required: true, message: "密码是必填项!", trigger: "blur" }],
        nickname: [{ required: true, message: "发件人昵称是必填项!", trigger: "blur" }],
        receiveList: [{ required: true, message: "收件人列表是必填项!", trigger: "blur" }],
        ccList: [{ required: true, message: "抄送列表是必填项!", trigger: "blur" }],
      },
    };
  },
  created() {
    // 初始化去发请求加载 platForm， emailForm的数据。
  },
  methods: {
    savePlatForm() {
      this.$refs["platForm"].validate((valid) => {
        if (valid) {
          console.log("保存平台配置: ", this.platForm);
        }
      });
    },
    sendTestEmail() {
      console.log("发送测试邮件: ")
    },
    saveEmailForm() {
      this.$refs["emailForm"].validate((valid) => {
        if (valid) {
          console.log("保存邮件配置: ", this.platForm);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-main {
  height: calc(100vh - 50px);
  overflow: hidden;
  background-color: #f0f2f5;

  .system-card {
    margin-bottom: 32px;

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .avatar-uploader ::v-deep .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader ::v-deep .el-upload:hover {
      border-color: #409eff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
    .avatar {
      width: 100px;
      height: 100px;
      display: block;
    }
  }
}
</style>
