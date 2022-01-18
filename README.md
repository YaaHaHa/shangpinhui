### params参数有就带，没有就不带，在$router.push(location)时
```js
location ={
    name:'search'
}
// 判断一下params参数到底有没有，如果为口就不写进location里面了，因为就算写进去，vue一看是空的就不会给你传
// 不要携带一个空串进去。在路由匹配中记得在params占位后面加问号标识有或无params参数
if (this.keyWord){
    location.params = {
        keyword : this.keyWord
    }
}

```

### 解决路由重复跳转的错误


### Axios引入后，全局有一个Axios的构造函数
1. 为什么`axios`和`axios.create({config})`都能发请求？是被`Axios`给`new`出来的吗？
   1. 并不是，是把`Axios`实例上的原型上的方法以及实例上的属性都添加到`axios`这个函数对象上去了
   2. 从功能上来说，`axios`是`Axios`的实例了，但是语法上不是，因为`axios`是函数，不是给new出来的


2. 为什么要用`axios.create({config})`再创建一个？
   1. 因为一个前台对应后台不止一台服务器，不可能只有一个配置，所以要创建

3. 自己二次封装的axios，在请求函数中调用中，请求函数为什么的返回值是Promise
   1. 方便后面去取他异步的结果，因为数据是异步拿到的，所以。。。


###  vuex模块化
开与不开命名空间有影响。如果开启，则操作时必须'moduleName/action'等，若不开启则不需要加moduleName

### 路由中
<router-link :to="`/search?categoryName=${category.categoryName}&category1Id${category.categoryId}`">{{category.categoryName}}</router-link>
>因为用到了模板字符串，to引号中的内容要按js解析，所以要加冒号


### 标签的自定义属性
 注意获取data-categoryName自定义属性的数据属性名要通过小写获取
 element.target.dataset.categoryname


 ### 二次封装axios
* 配置响应拦截器，作用是对请求过来的数据进行提取，对可能出现的错误进行处理
axios.interceptors.response.use(
    // 响应成功的回调
    response =>{
        return response.data;
    },
    // 响应失败的回调
    error =>{
        alert(error.message || '未知错误');
        // 抛出错误或返回reject的Promise 
        // throw error;
        return Promise.reject(error);
        /* 
            为什么要这样？非要抛出错误或返回reject
                首先要明了这个抛出的错误或者返回的reject什么时候出现，被谁拿来用？
                    这两个拦截器实际上就是两个.then调用。
                    当axios发送请求后，如果成功响应就执行成功的回调，返回一个Promise.resolve(response.data)。
                    如果失败就执行失败的回调，返回error可以吗？不行啊，以为拦截器是then()，如果不抛出错误或返回reject，那就返回一个成功的resolve
                        响应失败了，还返回一个成功的resolve，这还是一个异步请求数据的，响应拦截器执行后表示一次axios()的执行结果。
                    因为这是链式调用的，实质是.then()的链式。在获取用axios请求拿到的数据时，用async...await直接拿成功的response，如果不报错或返回reject，请求失败的信息也被await拿到了。请求失败在拦截器中处理了更好！
        
        */
    }
> 因为这是链式调用的，实质是.then()的链式。在获取用axios请求拿到的数据时，用async...await直接拿成功的response方便，如果不报错或返回reject，请求失败的信息也被await拿到了。请求失败在拦截器中处理了更好！

### day3的TypeNav的交互(与用户)效果
1. 鼠标悬浮突出显示。数据驱动显示，设置currentIndex与当前的idnex是否匹配，通过onmouseenter改current=index然后样式被匹配上。通过onmouseleave改currentIndex破坏样式匹配。
   1. 注意：鼠标移到哪取消突出显示？如果有特殊的业务要求，需要改html结构，让需要的放在一个div里
   2. 用户移动到每个标签上都要触发回调展示三级列表，会造成页面卡顿，必须用函数节流技术。引入了lodash库创建一个节流函数。


>`_.throttle(func, [wait=0], [options=])`创建一个节流函数，在 `wait` 秒内最多执行 `func` 一次的函数。 该函数提供一个 `cancel` 方法取消延迟的函数调用以及 `flush` 方法立即调用。 可以提供一个 `options` 对象决定如何调用 `func` 方法， `options.leading` 与|或 `options.trailing` 决定 `wait` 前后如何触发。 `func` 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 `func` 调用的结果。

注意: 如果 `leading` 和 `trailing` 都设定为 `true` 则 `func` 允许 `trailing` 方式调用的条件为: 在 `wait` 期间多次调用。

如果 `wait` 为 0 并且 `leading` 为 `false`, `func`调用将被推迟到下一个点，类似`setTimeout`为0的超时。


### 创建Swiper对象
为什么不使用案例上的类选择器？差异化，每一个轮播器的配置不一样，通过`ref`给不同的轮播器打上标识。用id不行，因为可能重复

### Mock是不会真正发送请求的，所以NETWORD栏看不到，且只能通过代码实现，代码写发送请求，然后就被拦下啦

Mock.mock( rurl?, rtype?, template|function( options ) )
rul:表示需要拦截的 URL,可以是 URL 字符串或 URL 正则
rtype:表示需要拦截的 Ajax 请求类型
template:请求要返回的模拟数据
function:执行结果作为模拟数据返回
options:指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性，参见 XMLHttpRequest 规范

### v-for遍历undefined不会报错
* 也就是说如果`goodsList`需要被遍历的数据是需要异步获取的，页面加载时数据还没过来，`v-for`不会报错的，
* 但是如果像`{{goodList.length}}`访问一个`undefined`的`length`是会报错的，所以为了防止这种情况发生，要给这个数据一个初始值,一个空数组作初始值会比较好一些
* 这样一来如果是`vuex`的数据，想给state加一个初始值不可能，所以运用到了`Getters`，通过`Getter`二次加工再给各组件去用

### created与mounted
created是在渲染模板之前调用，在created中先把数据准备好，再渲染，
mounted中获取数据渲染的话，已经渲染过一次，数据过来后再更新渲染一下。

#### 在同一个路由组件里跳转，只是路径的跳转的话，搜索组件对象不会重新创建, 初始化的勾子不会重新执行 ==> 不会再发请求


### 数组也能解构取值

### 函数传参之地址引用
```js
const obj = {name:'123',age:'20'}

function fn(params){
    params.name='111';
}

// 这里是吧obj在栈中的地址数据传进了fn中
fn(obj);
```

### 去掉请求对象中的没意义的属性
```js
        // 浅拷贝一层，因为要过滤掉空数组与内容为空的属性，这里是地址引用，这里的searchParams与Search组件中的option是一个对象
        searchParams = {...searchParams};
        // 遍历查找有没有属性为空或空数组，有就删除
        Object.keys(searchParams).forEach((key)=>{
          if (searchParams[key] === '' || (Array.isArray(searchParams[key]) && searchParams[key].length === 0)){
            delete searchParams[key];
          }
        })
```

### 自定义事件中，使用$event不是事件对象，是传递的数据


### 在分页器相关的开发时
默认在第一页，如果翻动了页数，再选择上方的品牌选择器，
    虽然Search组件中pageNo为1，但是Pagination中的myCurrentPage还是之前翻动后的页数,
    所以需要监听到Search中pageNo，由于已经通过props传给了Pagination，所以
    直接watch，然后改myCurrentPage


### 在vue中如果找不到方法处理功能，可以试着设置一个data

### async函数返回的一定是Promise值,dispatch就是把action的函数拿过来执行了一下，所以可以用
```js
                            第二个参数是函数的参数，没有第三个，所以要在第二个函数内接到参数，解构
async reqAddCartSuccess({commit},{skuId,skuNum}){
        const result= await reqaddShopCar(skuId,skuNum);
        if (result.code === 200){
            console.log(result);
            return "ok";
        } else{
            return Promise.reject(new Error('failed'));
        }
    }

```
    在添加购物车这一功能中，需要发送数据然后得到后台的回应后才进行下一步，所以搭配try...catch与异步action

### change与blur不同
change时，输入框失去焦点，如果value改变了，那就触发
blur是，不管value变不变，都会触发

### 以后如果我们遇到的数据是简单数据，那么我们考虑路由传参  如果我们遇到的是复杂数据(对象)，那么我们考虑存储手段
    localStorage        setItem  getItem  removeItem  clear
    sessionStorage         -- ---------
* 区别：localStorage是永久储存   sessionStorage浏览器关了就没了


### 排他与开关
排他要用到两个数据，一个是item，一个是包含所有item的list。先遍历list设置一样的内容，再单独给某一个item设置


### axios的请求拦截器中添加请求头
```js
//携带临时标识
    let userTempId = store.state.user.userTempId
    if(userTempId){
    config.headers.userTempId = userTempId
    }

```

### history与hash模式


### nodejs中
    fs文件管理系统，fs.readerFile()获取到的是buffer数据，需要toString()一下转换一下，然后可能还需要再JSON.parse()转一下
>   因为node只认识字符串或二进制，所以一般传输时数据一定要转换成json

    nodejs中可以forEach，不担心遍历的i是最后一个
```js
// 把新的商品推入到购物车列表数据中
    if (cart.data.length == 0){     //如果当前购物车列表为空，直接添加进去就完事了
        cart.data.push(addGoods);
    } else {
            cart.data.forEach((cartGood,index,cartArr)=>{
                if (cartGood.id != skuId){
                    if (index >= cartArr.length-1){
                        // 如果遍历到最后一个 id还是不一样，那就开始向数组中添加
                        // 如果没有这一层判断，那么每次遇到一个不一样的id就添加，要判断是不是全遍历过了，然后再添加一个
                        cart.data.push(addGoods);
                        console.log('添加成功，被添加的id：',addGoods.id);
                        // return true;
                    }
                    
                } else {
                    // 一旦找到id匹配上的，马上替换

                    // 如果数据中已存在对应商品，直接把最新的这一条数据给他，直接替换了，与视频里不一样，那个是以skuNum操作的
                        //找到这一个元素的下标，然后替换
                    
                    cartArr[index] = addGoods;
                    console.log('替换成功，被替换的id：',addGoods.id);
                    throw new Error('hasFoundEqualGodos')
                }
                
            })
        } 
    }
```
> 不是最完美的方案：向数组中添加不重复的元素，要注意，一定是遍历了所有的元素，比较了所有的元素后才决定是不是添加，
>   而不是简单的if (item == value){arr.push(value)}
>       这样的效果是：数组中有多少和value不一样的元素，就添加多少个value
>   如果 if (item == value){ if(index == arr.length-1){arr.push(value)} }
>       那样在匹配到最后一个时，才会添加一个

>  用try..catch搭配throw err跳出forEach循环
```js

    // 把新的商品推入到购物车列表数据中
    if (cart.data.length == 0){     //如果当前购物车列表为空，直接添加进去就完事了
        cart.data.push(addGoods);
    } else {
        // 通过try...catch跳出循环，同throw跳出循环
        try {
            cart.data.forEach((cartGood,index,cartArr)=>{
                if (cartGood.id != skuId){
                    if (index >= cartArr.length-1){
                        // 如果遍历到最后一个 id还是不一样，那就开始向数组中添加
                        // 如果没有这一层判断，那么每次遇到一个不一样的id就添加，要判断是不是全遍历过了，然后再添加一个
                        cart.data.push(addGoods);
                        console.log('添加成功，被添加的id：',addGoods.id);
                        // return true;
                    }
                    
                } else {
                    // 一旦找到id匹配上的，马上替换

                    // 如果数据中已存在对应商品，直接把最新的这一条数据给他，直接替换了，与视频里不一样，那个是以skuNum操作的
                        //找到这一个元素的下标，然后替换
                    
                    cartArr[index] = addGoods;
                    console.log('替换成功，被替换的id：',addGoods.id);
                    throw new Error('hasFoundEqualGodos')
                }
                
            })
        } catch (error) {
            if (error.message != 'hasFoundEqualGodos') throw error;
        }
        

    }
```


### 在vuex中的actions
他的第一个参数时context，实际上就是当前的store，而且dispatch就是把那个action拿过来执行了一下，
    所以在组件中调用dispatch时,就当做拿过来执行了一遍就可以


### 遍历中的if中排他思想
对于那些不需要处理的遍历，直接`return`返回就是了


### 如果没有这一对应的locatStore，就返回null！！！
    let userTempId = localStorage.getItem('USER_KEY')

### 统计用reduce

### 路由守卫
全局前置守卫：刚过来匹配的时候就拿捏了
全局解析守卫：在匹配的过程中拿捏
全局后置守卫：已经跳过去了才拿捏


### 请求来的数据一定要仔细的看看看啊看清楚！！！


### ELement-ui中的MessageBox弹窗
    不管是点确定还是取消，都会关掉这个弹窗。
        这样是不行的，因为支付用到这个弹窗，不给钱要么交易结束，要么给钱

### 支付流程
  1. 点击支付，弹出支付框，框内有二维码。用的Element-ui的MessageBox展示，记得取消关闭按钮的显示
  2. 在支付框展示期间，创建一个定时器轮询，每过一段时间问服务器，有没有交钱，如果交了，就做一个标记
  3. 当用户点击'已支付完成'按钮时，判断有没有保存支付成功的标记，
     1. 如果没有就不放行，弹出一个框提醒他我们还没收到
     2. 如果有，就跳转到支付成功的界面
> 关于定时器的使用：
>  1. 定时器的标识应保存在全局中，因为清除的时候，好找
>  2. 为防止定时器重复开启，加一个判断，如果已经存在这个标识，就进不去这个判断不开定时器了，没有就进去开启
>  3. 定时器清除后，如果有一个变量存储标识，记得把他释放掉，因为清除定时器，并不会释放改变量存储的内容


### router-link
```html
tbody中不要直接夹杂着router-link，有也要包在dd中
<dd>
    <router-link to="/center/myorder">我的订单</router-link>
</dd>

```



### Element-ui的引入组件
Vue.user(Pagination)
或 Vue.component('el-pagination',Pagination)
    ```html
        <!-- 在这个Element-ui的分页组件中，layout布局中要展示的内容，必须实现自定义过，不然就影响整体的效果 -->
        <!-- 比如布局中的sizes如果没有事先page-sizes初始化一下，那么就只能出现一页 -->
    <el-pagination
        :page-size="3"
        :pager-count="7"
        :page-sizes="[3,5,10,20]"
        layout="prev, pager, next, jumper, ->, sizes, total"
        :total="8"
        :current-page="page"
    >
    ```


### 插槽
使用场景：一般是由父组件中使用子组件
父组件传递数据给到子组件  子组件props接收数据 然后通过遍历展示数据 但是数据的结构或样式由父组件决定 此时需要将遍历过的数据重新传递给父组件,将要改变的数据部分用<slot>包裹 在<slot>标签中将数据传递给父组件
父组件接收到子组件传递过来的数据 在template标签中 使用`slot-scope='{结构出来的数据}' `然后进行样式或结构的改变
例如:
```html
	父组件中:isComplete:true或false  1-先将数据传递给子组件 :todos='todos'  4-父组件接收slot-scope="{todo}"子组件传递的数据然后改变结构
         <List :todos='todos'>
              <template slot-scope="{todo,index}">
                <span>{{index}}</span><li :style="{color:todo.isComplete?'red':'yellow'}">{{todo.text}}</li>
              </template>
        </List>
    子组件中:首先props:['todos'] 2-在子组件接收后 遍历展示  3-将遍历后的数据需要发生结构变化的数据传递给父组件
         <li v-for="(todo, index) in todos" :key="index">
              <slot :todo='todo' :index='index'>
                 {{todo.text}}
               </slot>
          </li>
```
>slot与slot-scope属性是一样的，只不过一个是旧的一个是新的


### v-model的原理
```html
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


    CustonInput.vue
    <!-- 因为这里input并不是赋值，所以不能简写成v-model -->
    <!-- 这里实现了子与父的通讯，在子里面父子数据同步 -->
    <input type="text" :value='value' @input="$emit('input',$event.target.value)">

    props:['value']
```


>v-model不但可以用在html的表单类元素上，还可以在组件标签身上使用，
        组件标签内部一般是有表单元素的
        他实用的场合是父子之间，最终达到父子数据同步的效果

### .sync实现父子组件数据同步
```html
    <h2>不使用sync修改符</h2>
    <!-- 一个叫update:money的自定义事件 -->
    <Child :money='money' @update:money="money = $event"/>



    <h2>使用sync修改符</h2>
    <Child :money.sync="money"/>

    <h2>使用v-model修改符</h2>
    <Child2 v-model="money"/>


    Chile.vue:
    <!-- 触发事件的名称必须是update:xxx。.sync的要求就是他 -->
    <button @click="$emit('update:money',money -= 100)">花钱</button>

    props:['money']


    Child2.vue
    <button @click="$emit('input',value -= 100)">花钱</button>

    props:['value']

```
*  总结 v-model和.async修饰符都可以实现父子组件数据同步
    约定俗称
    1. v-model是当组件当中有表单元素的时候使用
    2. .async是当子组件中不是表单类元素的时候使用
>其实类，都可以用，只不过哪个更适合更方便
    


### el-button中的click与dblclick
```html
    <!-- click与dblclick的差别 -->
    <!-- 这里click是自定义事件，而且在el-button组件中有$emit('click',) -->
    <el-button type="primary" icon="el-icon-position" @click="fn1">点击</el-button>

    <!-- el-button中没有$emit('dblclick',)所以想双击就加.native成原生 -->
    <el-button type="primary" icon="el-icon-thumb" @dblclick.native="fn2">双击</el-button>

```
* 内部用click的$emit处理，而dblclick没有$emit去处理，所以想双击就转成原生的


### $attrs与$listeners


```html
HintButton.vue

  <a :title="title">
      <!-- $attrs就是从父哪里传过来的数据，没有被pros接的那部分。用v-bind的完整写法绑定上-->
      <!-- $listeners是在父那里被绑定的事件 用v-on的完整形式写-->
    <el-button v-bind="$attrs" v-on="$listeners"/>
  </a>  
```


### $children与$parent与$refs
  * $children[index]这样是不可行的，因为顺序问题，不一定每一次都是想要的那个，真想取准确
        用$refs，二者在堆dom元素时取的是dom对象，但是在对组件对象时取的是组件对象
    $children用遍历比较方便，$refs单独取一个比较方便。
  * $parent也能拿到组件对象，但是因为有时不止一个爹，比如Pagination分页器，所以还是谨慎使用