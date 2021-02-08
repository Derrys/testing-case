<template>
<el-tooltip v-if="tips" :content="tips" placement="top-start">
  <i :class="[icon, 'icon-item']" />
</el-tooltip>
<i v-else :class="[icon, 'icon-item']" />
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
    }
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.icon-item {
  padding: 8px;
  font-size: 24px;
  color: #5a5e66;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
</style>
