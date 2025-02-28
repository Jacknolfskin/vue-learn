<template>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
           background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="WebSocket">Melsec</el-menu-item>
    <el-submenu index="3">
      <template slot="title">Projects</template>
      <el-menu-item index="3-1">Shiny</el-menu-item>
      <el-menu-item index="3-2">LearnVue</el-menu-item>
      <el-menu-item index="3-3">OtherProject</el-menu-item>
    </el-submenu>
    <el-menu-item index="4">Login</el-menu-item>
    <el-menu-item index="5">Resume</el-menu-item>
    <el-menu-item index="abouts">About</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  // 注意这里我是将它的改为这样的，效果是一样的，但使用这个可以在页面任何部位设置跳转时头部导航条部分样式会跟这变化即为选中，而不是不变的例如：你设置跳转到产品页导航条的样式也会跟着选中产品项
  computed: {
    activeIndex () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(this)
      console.log(key, keyPath)
    }
  }
}
</script>
