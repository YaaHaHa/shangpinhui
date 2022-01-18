<template>
  <div style="background: #ccc; height: 50px;">
    <span>小明每次花100元</span>
    <button @click="$emit('input',value -= 100)">花钱</button>
    爸爸还剩 {{value}} 元
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Child2',
    // 因为此子组件被绑定了v-model，所以就要接一个叫value的props
    props:['value']
  }
</script>
