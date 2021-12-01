<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor v-for="item in floorsList" :key="item.id" :floor='item'/>
    <Brand />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";

export default {
  name: "Home",
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    this.$store.dispatch("home/getRecommendList"); //调用dispatch发请求去往vuex中存数据今日列表请求数据
    this.$store.dispatch("home/getFloorsList"); //楼层数据
  },

  computed: {
    // 为啥楼层的数据要保留在这里？不然呢？保存到Floor里面？不止一个楼层喔，楼层有多少要从数据中得知嗷！！然后再遍历数据生成楼层
    ...mapState({ floorsList: (state) => state.home.floorsList }),
  },
};
</script>