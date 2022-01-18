<template>
  <div style="background: #ccc; height: 50px;">
    <h2>input包装组件</h2>
    <!-- 因为这里input并不是赋值，所以不能简写成v-model -->
    <!-- 这里实现了子与父的通讯，在子里面父子数据同步 -->
    <input type="text" :value='value' @input="$emit('input',$event.target.value)">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'CustomInput',
    props:['value']
  }
</script>
