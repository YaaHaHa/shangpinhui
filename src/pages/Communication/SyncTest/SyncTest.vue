<template>
  <div>
    小明的爸爸现在有{{money}}元
    <!-- 1、父组件当中money传递给子组件，子组件使用 -->
    <!-- 2、子组件要想修改父组件的数据，必须触发父组件给子组件绑定的自定义事件 -->
    <!-- 3、子组件触发自定义事件传递过来新的数据，父组件更改 -->
    <!-- 4、父组件当中的数据修改后，重新传递给子组件，子组件也就发生改变了 -->
    <h2>不使用sync修改符</h2>
    <!-- 一个叫update:money的自定义事件 -->
    <!-- <Child :money='money' @update:money="money = $event"/> -->



    <h2>使用sync修改符</h2>
    <Child :money.sync="money"/>
    <h2>使用v-model修改符</h2>
    <Child2 v-model="money"/>


    <!-- 总结 v-model和.async修饰符都可以实现父子组件数据同步
    约定俗称
    1、v-model是当组件当中有表单元素的时候使用
    2、.async是当子组件中不是表单类元素的时候使用
      其实类，都可以用，只不过哪个更适合更方便
     -->
    <hr>

    <!-- click与dblclick的差别 -->
    <!-- 这里click是自定义事件，而且在el-button组件中有$emit('click',) -->
    <el-button type="primary" icon="el-icon-position" @click="fn1">点击</el-button>

    <!-- el-button中没有$emit('dblclick',)所以想双击就加.native成原生 -->
    <el-button type="primary" icon="el-icon-thumb" @dblclick.native="fn2">双击</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import Child from './Child.vue'
  import Child2 from './Child2.vue'
  export default {
    name: 'SyncTest',
    data(){
      return {
        money:1000
      }
    },
    components: {
      Child,
      Child2
    },
    methods: {
      fn1(){
        console.log('111');
      },
      fn2(){
        console.log('222');
      }
    },
  }
</script>
