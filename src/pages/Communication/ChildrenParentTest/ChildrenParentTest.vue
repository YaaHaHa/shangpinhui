<template>
  <div>
    <h2>BABA有存款: {{money}}</h2>
    <button @click="borrowMoneyXH(150)">找小红借钱150</button><br>
    <button @click="borrowMoneyXM(100)">找小明借钱100</button><br>
    <button @click="borrowMoneyAll(200)">找所有孩子借钱200</button><br>
    
    <br>

    <!-- ref在绑定在普通dom标签上时拿的是标签对象 -->
    <!-- ref在绑定在组件上时，拿到的是组件对象 -->
    <Daughter ref="dau"/>

    <br>
    <Son ref="son"/>
  </div>
</template>

<script>
import Son from './Son'
import Daughter from './Daughter'

export default {
  name: 'ChildrenParentTest',
  data () {
    return {
      money: 1000
    }
  },

  methods: {
    // 向小红借钱
    borrowMoneyXH(money){
      this.money += money;
      this.$refs.dau.money -= money;    // $refs中拿的最准确，而且可以拿到组件对象
    },


    // 找小明借钱
    borrowMoneyXM(money){
      this.money += money;
      this.$refs.son.money -= money;
      // this.$children[0].money -= money;    // 这样是不可行的，因为顺序问题，不一定每一次都是想要的那个
    },


    // 找两个人借钱
    borrowMoneyAll(money){
      this.money += money;

      // 虽然不能准确的取出想要的那个对象，但是$children可以遍历，
      this.$children.forEach (item => item.money-=money)
    }


    /* 
    
      总结：
      $children[index]这样是不可行的，因为顺序问题，不一定每一次都是想要的那个，真想取准确
        用$refs，二者在堆dom元素时取的是dom对象，但是在对组件对象时取的是组件对象
      $children用遍历比较方便，$refs单独取一个比较方便
    
      $parent也能拿到组件对象，但是因为有时不止一个爹，比如Pagination分页器，所以还是谨慎使用
    
    */
  },

  components: {
    Son,
    Daughter
  }
}
</script>

<style>

</style>
