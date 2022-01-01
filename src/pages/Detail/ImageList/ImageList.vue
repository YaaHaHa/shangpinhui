<template>
    <swiper :options="swiperOptions">
    <swiper-slide v-for="(img,index) in imgaeList" :key="img.id">
      <img :src="img.imgUrl" :class="{active: index === currentIndex}" @click="changeChecked(index)"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>


  export default {
    name: "ImageList",
    data() {
      return {
        // 当前被选中的图片下标。在设置激活状态样式时设置的，因为要效验当前下标决定是否采用active样式
        currentIndex:0,
        swiperOptions: {
        // direction: 'horizontal', // 水平切换选项
        // loop: true, // 循环模式选项
        // autoplay: { // 自动轮播
        //   delay: 4000,
        //   disableOnInteraction: false, // 用户操作后是否停止自动轮播
        // }, 
        // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        // },
        // 如果需要前进后退按钮

        slidesPerView:5,    //设置slider容器能够同时显示的slides数量(carousel模式)
        slidesPerGroup:3,   //点箭头一次滚动多少栏
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
      }
    },
    props:['imgaeList'],
    methods: {
      // 点击小图，Zoom中展示大图
      changeChecked(index){
        // 设置当前备选中的下标
        this.currentIndex = index;
        this.$bus.$emit('changImg',this.currentIndex);
      }
    },
  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

        &:hover {
          border: 2px solid #f60;
          padding: 1px;
        }
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>