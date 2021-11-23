// 引入路由组件
import Home from '../pages/Home'
import Search from '../pages/Search'
import Register from '../pages/Register'
import Login from '../pages/Login'

export default [
    {
        path: '/',
        component: Home
    },
    {
        name: 'sousuo',
        path: '/search/:keyword?',   //?表示有或无，不管有没有参数都会匹配到，有就显示没有就直接/search。如果不加这个问号，且没有传参数，路由的匹配就有问题，地址栏没有search，但是好像有匹配上了
        component: Search,
        props(route){
            return route.query
        }
    },
    {
        path: '/login',
        component: Login,
        meta: { isHiddenFooter: true }
    },
    {
        path: '/register',
        component: Register,
        meta: { isHiddenFooter: true }
    },
]