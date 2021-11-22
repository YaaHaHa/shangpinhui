<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHiddenFooter" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import { reqCategoryList } from "./api";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted(){
    reqCategoryList();
  }
};
</script>

<style>
</style>
