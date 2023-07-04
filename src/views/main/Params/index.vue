<template>
    <div class="params">
      <PubHeader :searchHandle="$api.paramsSearch"/>
      <ParamsList />
      <PubPagination total="2"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ParamsList from './ParamsList.vue';
  import PubPagination from '@/components/PubPagination.vue';
  import PubHeader from '@/components/PubHeader.vue';
  
  export default{
    components:{
      ParamsList,
      PubPagination,
      PubHeader
    }
  }
  </script>

<style scoped>

.params{
  width:1200px;
  margin:0 auto;
}
</style>