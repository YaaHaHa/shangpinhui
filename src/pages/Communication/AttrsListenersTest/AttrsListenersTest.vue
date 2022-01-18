<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <HintButton type="primary" title="箭头" icon="el-icon-position" anonymous='aaa' @click="fn1"/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "AttrsListenersTest",

  methods: {
    fn1(){
      console.log('11');
    }
  },

};
</script>
