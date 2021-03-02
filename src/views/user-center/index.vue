<template>
  <el-main>
    <el-card class="system-card">
      <div slot="header" class="card-header">
        <span>个人中心</span>
        <el-button
          size="medium"
          type="primary"
          @click.native="toggleForm"
          icon="el-icon-box"
          >编辑/保存</el-button
        >
      </div>
      <el-form
        :model="userForm"
        :rules="userRules"
        ref="userForm"
        label-width="100px"
      >
        <div class="user-img">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
          >
            <img v-if="userForm.img" :src="userForm.img" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <el-row :gutter="32">
          <el-col :sm="12" :xl="8">
            <el-form-item label="账号: " prop="account">
              <el-input
                v-model="userForm.account"
                :disabled="readOnly"
                placeholder="请输入账号..."
              />
            </el-form-item>
          </el-col>
          <el-col :sm="12" :xl="8">
            <el-form-item label="姓名: " prop="name">
              <el-input
                v-model="userForm.name"
                :disabled="readOnly"
                placeholder="请输入姓名..."
              />
            </el-form-item>
          </el-col>
          <el-col :sm="12" :xl="8">
            <el-form-item label="手机: " prop="phone">
              <el-input
                v-model="userForm.phone"
                :disabled="readOnly"
                placeholder="请输入手机号..."
              />
            </el-form-item>
          </el-col>
          <el-col :sm="12" :xl="8">
            <el-form-item label="邮箱: " prop="email">
              <el-input
                v-model="userForm.email"
                :disabled="readOnly"
                placeholder="请输入邮箱号..."
              />
            </el-form-item>
          </el-col>
          <el-col :sm="12" :xl="8">
            <el-form-item label="性别: " prop="sex">
              <el-radio-group v-model="userForm.sex" :disabled="readOnly">
                <el-radio label="male">男</el-radio>
                <el-radio label="female">女</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :xl="8">
            <el-tag class="resetPwd" @click.native="resetPwd">重置密码</el-tag>
          </el-col>
          <el-col :sm="12" :xl="8">
            <el-form-item label="部门: " prop="department">
              <el-input
                v-model="userForm.department"
                :disabled="readOnly"
                placeholder="请输入部门..."
              />
            </el-form-item>
          </el-col>
          <el-col :sm="12" :xl="8">
            <el-form-item label="职位: " prop="job">
              <el-input
                v-model="userForm.job"
                :disabled="readOnly"
                placeholder="请输入职位..."
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </el-main>
</template>

<script>
export default {
  name: "UserCenter",
  components: {},
  data() {
    return {
      readOnly: true,
      userForm: {
        img:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        account: "这是一个牛逼哄哄的账号",
        sex: "male",
      },
      userRules: {
        account: [
          { required: true, message: "账号是必填项!", trigger: "blur" },
        ],
        name: [{ required: true, message: "姓名是必填项!", trigger: "blur" }],
        phone: [{ required: true, message: "手机是必填项!", trigger: "blur" }],
        email: [{ required: true, message: "邮箱是必填项!", trigger: "blur" }],
        department: [
          { required: true, message: "部门是必填项!", trigger: "blur" },
        ],
        job: [{ required: true, message: "职位是必填项!", trigger: "blur" }],
      },
    };
  },
  methods: {
    toggleForm() {
      if (this.readOnly) {
        this.readOnly = false
      } else {
        this.$refs["userForm"].validate((valid) => {
          if (valid) {
            console.log("保存个人中心: ", this.userForm);
            this.readOnly = true
          }
        });
      }
    },
    resetPwd() {
      console.log("重置密码!");
    },
  },
};
</script>

<style lang="scss" scoped>
.el-main {
  height: calc(100vh - 50px);
  overflow: auto;
  background-color: #f0f2f5;

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user-img {
    text-align: center;
    margin-bottom: 32px;
  }

  .resetPwd {
    height: 40px;
    line-height: 40px;
    margin-bottom: 22px;
    margin-left: 100px;
    width: calc(100% - 100px);
    cursor: pointer;
  }

  .avatar-uploader ::v-deep .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 50px;
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
    border-radius: 50px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    display: block;
  }
}
</style>
