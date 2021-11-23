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