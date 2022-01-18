<template>
  <div>
    <h1>EventTest组件</h1>
    <!-- 对于组件绑定事件，如果不加native那就是自定义事件 
                        加了native，那就直接绑定到了子组件中模板的根元素上，这也是相当于事件委派了属于是
    -->
    <event-1 @click.native="clickE1($event)"></event-1>

    <!-- 
      这里的$event在原生的事件中表示的是事件对象，而在自定义事件中是指第一个参数
        其实这里加与不加$event都可，只是这里为了更清晰的对比，所以写上去了，既然写了就不能瞎写
            如果瞎写一个叫abc的参数名，根本找不到叫abc的变量，所以就会报错。写$event会默认接收第一个参数
          
     -->
    <event-2 @click="clickE2($event)" @XXX="XXXE2($event)"></event-2>
  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {
    name: 'EventTest',

    components: {
      Event1,
      Event2,
    },

    methods: {
      clickE1($event){
        console.log($event);
      },

      // 这个是自定义事件click的回调
      clickE2($even){
        console.log($even);
      },
      XXXE2($event){
        console.log($event);
      }
    }
  }
</script>
