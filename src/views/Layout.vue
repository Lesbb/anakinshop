<template>
    <div>
      <HeaderNav />
     <router-view></router-view>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import HeaderNav from '../components/HeaderNav.vue';
  export default {
    components: {
     HeaderNav
    }
  }
  </script>

<style src="@/assets/css/common.css">

</style>