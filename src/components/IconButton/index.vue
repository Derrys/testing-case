<template>
<el-tooltip v-if="tips" :content="tips" placement="top-start">
  <i :class="[icon, 'icon', `icon-${size}`]" />
</el-tooltip>
<i v-else :class="[icon, 'icon', `icon-${size}`]" />
</template>

<script>
export default {
  name: "IconButton",
  props: {
    icon: {
      type: String,
      required: true
    },
    tips: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.icon {
  color: #5a5e66;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
.icon-normal {
  padding: 8px;
  font-size: 24px;
}
.icon-small {
  padding: 8px;
  font-size: 16px;
}
</style>
