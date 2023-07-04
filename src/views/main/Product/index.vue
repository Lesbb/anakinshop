<template>
  <div class="product">
    <ProductHeader />
    <ProductList />
    <ProductPagination />
    <ProductAdd />
    <ProductEditor />
  </div>
</template>
  
<script>
// @ is an alias to /src
import ProductList from "./ProductList.vue"
import ProductPagination from "./ProductPagination.vue";  
import ProductHeader from "./ProductHeader.vue"
import ProductAdd from "./ProductAdd.vue";
import ProductEditor from "./ProductEditor.vue";

export default {
  name: 'Product',
  components: {
    ProductList,
    ProductPagination,
    ProductHeader,
    ProductAdd,
    ProductEditor
  }
  }
  </script>
 
<style scoped>
 
 .product{
  width:1200px;
  margin:0 auto;
 }
</style>