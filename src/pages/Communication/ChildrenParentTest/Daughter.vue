<template>
  <div style="background: #ccc; height: 50px;">
    <h3>女儿小红: 有存款: {{money}}</h3>
    <button @click="giveMoney(100)">给BABA钱: 100</button>
  </div>
</template>

<script>
export default {
  name: 'Daughter',
  data () {
    return {
      money: 20000
    }
  },

  methods: {
    giveMoney(money){
      // 一般情况下只有一个$parent，但是不排除有多个，理由项目中的TypeNav，所以$parent还是少用
      this.$parent.money += money;
      this.money -= money;
    }
  }
}
</script>
