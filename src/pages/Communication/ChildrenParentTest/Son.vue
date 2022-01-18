<template>
  <div style="background: #ccc; height: 50px;">
    <h3>儿子小明: 有存款: {{money}}</h3>
    <button @click="giveMoney(50)">给BABA钱: 50</button>
  </div>
</template>

<script>
export default {
  name: 'Son',
  data () {
    return {
      money: 30000
    }
  },

  methods: {
    // 给BABA钱
    giveMoney(money){
      // 一般情况下只有一个$parent，但是不排除有多个，理由项目中的TypeNav，所以$parent还是少用
      this.$parent.money += money;
      this.money -= money;
    }
  }
}
</script>
