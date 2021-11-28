<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand />
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'

export default {
    name:'Home',
    components:{
      ListContainer,
      TodayRecommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    mounted() {
      this.$store.dispatch('home/getRecommendList');//调用dispatch发请求去往vuex中存数据今日列表请求数据
      this.$store.dispatch('home/getFloorsList');//楼层数据
    },
}
</script>