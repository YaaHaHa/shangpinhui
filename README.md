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