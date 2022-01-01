<template>
  <div class="spec-preview">
    <img :src="imgItem.imgUrl" />
    <div class="event" @mousemove="mouseZoom"></div>
    <div class="big">
      <img src="../images/s1.png" ref="big"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props:['imgaeList'],
    data() {
      return {
        defaultInd : 0,  //显示图片的默认下标
      }
    },
    mounted() {
      // 绑定全局事件总线，等着从ImgList穿过来的下标
      this.$bus.$on('changImg',(index)=>{
        this.defaultInd = index;
      })


      

    },
    computed:{
      imgItem(){
        return this.imgaeList[this.defaultInd] || {}
      },
    },
    methods: {
      // 放大镜逻辑
      mouseZoom(event){
        let mask = this.$refs.mask;

        
        // 拿到鼠标的offset值
        let mouseX = event.offsetX;
        let mouseY = event.offsetY;

        // 拿到修正后的move，马上移动！
        let moveX = mouseX - mask.clientWidth / 2;
        let moveY = mouseY - mask.clientHeight / 2;

        // 如果要移动的left小于0，说明mask要移出去了，鼠标已经mouseX < mask.clientWidth / 2
        if(moveX<0){
          moveX = 0;
        } else if (moveX > mask.clientWidth){   // 因为mask正好是event盒子的一半，所以如果进入这个if，说明left已经超过边界
          moveX = mask.clientWidth
        }

        if(moveY<0){
          moveY = 0;
        } else if (moveY > mask.clientHeight){
          moveY = mask.clientHeight
        }

        // 设置样式
        mask.style.left = moveX + 'px';
        mask.style.top = moveY + 'px';

        // 设置big大图的偏移。方向与mask相反，距离是mask的两倍
        let big = this.$refs.big;
        big.style.left = -moveX*2 + 'px';
        big.style.top = -moveY*2 + 'px';
      }
    },
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>