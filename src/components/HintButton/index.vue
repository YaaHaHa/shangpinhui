<template>
  <a :title="title">
      <!-- $attrs就是从父哪里传过来的数据，没有被pros接的那部分。用v-bind的完整写法绑定上-->
      <!-- $listeners是在父那里被绑定的事件 用v-on的完整形式写-->
    <el-button v-bind="$attrs" v-on="$listeners"/>
  </a>
</template>

<script>
export default {
  name: "HintButton",
  props:['title'],
  mounted() {
    console.log(this.$attrs,this.$listeners);
  },
};
</script>

<style>
</style>