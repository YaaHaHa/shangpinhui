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




export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    /* reqCategoryList().then((result) => {
      console.log('result',result);
    }); */
    // 请求获取三级分类数据，这里请求，并不是在这里读取数据
    this.$store.dispatch('home/getCategoryList');


    // 利用vuex获取数据，数据保存在vuex的home模块的homeBannerData
    this.$store.dispatch('home/getCarouselData');
  },
};
</script>

<style>
</style>
