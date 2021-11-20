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
