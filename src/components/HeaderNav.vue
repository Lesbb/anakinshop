<template>
  <el-menu :default-active="active" mode="horizontal" background-color="purple" text-color="#fff"
    active-text-color="#ffd04b" @select="handleSelect" router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/product">商品管理</el-menu-item>
    <el-menu-item index="/params">规格参数</el-menu-item>
    <el-menu-item index="/AD">广告管理</el-menu-item>
    <el-menu-item class="user">
      <span class="user-name">{{ user.username }}</span>
      <el-button @click="logoutHandle">退出</el-button>
    </el-menu-item>
  </el-menu>
</template> 

<script>

import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      active: "/"
    }
  },
  computed: {
    ...mapState("login", ["user"])
  },
  mounted() {
    if (sessionStorage.getItem("key")) {
      this.active = sessionStorage.getItem("key")
    }
  },
  methods: {
    ...mapMutations("login", ["setUser"]),
    logoutHandle() {
      this.setUser({})
      localStorage.removeItem("anakin")
      this.$router("/login")
    },
    handleSelect(key, keyPath) {
      sessionStorage.setItem("key", key)
    }
  }
}
</script>

<style scoped="less">
.user {
  float: right !important;
  margin-right: 20px;
  line-height: 60px;

  .user-name {
    color: #fff;
    margin-right: 10px;
    font-size: 15px;
    border: 1px solid #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
  }
}
</style>