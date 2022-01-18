<template>
  <div style="background: #ccc; height: 80px;">
    <h2>Event2组件</h2>
    <!-- btton的click回调事件中触发此组件的自定义事件,如果加了括号，想要事件对象就必须写$event -->
    <button @click="disClick($event)">分发自定义click事件</button><br>
    <button @click="disXXX($event)">分发自定义xxx事件</button><br>
  </div>
</template>

<script>
export default {
  name:'Event2',
  methods: {
    disClick(e){
      this.$emit('click',e.target.innerHTML);
    },

    disXXX(e){
      this.$emit('XXX',e.target.innerHTML);
    }
  },
}
</script>
