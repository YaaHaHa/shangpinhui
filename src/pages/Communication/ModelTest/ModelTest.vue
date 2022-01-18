<template>
  <div>
    <h2>深入v-model</h2>
    <h3>这里是msg：{{ msg }}</h3>

    <!-- v-model实际上就是结合了单项数据绑定与input事件 -->
    <input type="text" :value="msg" @input="msg = $event.target.value" />
    <span>我是{{ msg }}</span>
    <br />
    <br />

    <!-- 其实如果input事件只作赋值的话就相当于v-model了 -->
    <input type="text" v-model="msg" />
    <span>我是{{ msg }}</span>
    <br />
    <br />
    <br />

    <h2>子组件CustomInput</h2>
    <!-- 把value值传过去给他显示，input是自定义事件 -->
    <!-- <CustomInput :value='msg' @input="msg = $event"/> -->

    <!-- 简写。如果有:value和input只赋值，那就可以简写 -->
    <CustomInput v-model="msg" />

    <br />
    <br />
    <br />

    <!-- 总结
      v-model不但可以用在html的表单类元素上，还可以在组件标签身上使用，
        组件标签内部一般是有表单元素的
        他实用的场合是父子之间，最终达到父子数据同步的效果
     -->

    <!-- <el-input :value="msg" @input="msg = $event"/> -->
    <el-input v-model="msg" />
    <!-- 

      由此可见，el-input中的input用:value='value' @input="$emit('input',$event.target.value)"
     -->
  </div>
</template>

<script type="text/ecmascript-6">
import CustomInput from "./CustomInput.vue";
export default {
  name: "ModelTest",
  data() {
    return {
      msg: "123",
    };
  },
  components: {
    CustomInput,
  },
};
</script>
