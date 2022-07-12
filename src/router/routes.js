// 引入路由组件
import Home from '../pages/Home'
import Search from '../pages/Search'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay'
import PaySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'
import MyOrder from '../pages/Center/MyOrder'
import GroupOrder from '../pages/Center/GroupOrder'
import Communication from '../pages/Communication'
import ScopeSlotTest from '../pages/Communication/ScopeSlotTest/ScopeSlotTest.vue'
import EventTest from '../pages/Communication/EventTest/EventTest.vue'
import ModelTest from '../pages/Communication/ModelTest/ModelTest.vue'
import SyncTest from '../pages/Communication/SyncTest/SyncTest.vue'
import AttrsListenersTest from '../pages/Communication/AttrsListenersTest/AttrsListenersTest.vue'
import ChildrenParentTest from '../pages/Communication/ChildrenParentTest/ChildrenParentTest.vue'
import InterQues from '../pages/InterQues'
import EchartsTest from '../pages/EchartsTest'
import ActiveLine from '../pages/EchartsTest/components/ActiveLine.vue'

export default [
    {
        path: '/communication',
        component: Communication,
        children: [
            {
                path: "scope-slot",
                component: ScopeSlotTest
            },
            {
                path: "event",
                component: EventTest
            },
            {
                path: "model",
                component: ModelTest
            },
            {
                path: "sync",
                component: SyncTest
            },
            {
                path: "attrs-listeners",
                component: AttrsListenersTest
            },
            {
                path: "children-parent",
                component: ChildrenParentTest
            }
        ]
    },
    {
        path: '/center',
        component: Center,
        // redirect:'center/myorder',   重定向
        children: [
            {
                path: 'myorder',
                component: MyOrder,
            },
            {
                path: 'grouporder',
                component: GroupOrder
            },
            {
                path: '',
                redirect: 'myorder'
            }
        ]
    },
    {
        path: '/paysuccess',
        component: PaySuccess
    },
    {
        path: '/pay',
        component: Pay,
        // 单个路由守卫，如果不是从trade来的，不给过
        beforeEnter: (to, from, next) => {
            if (from.path === '/trade') {
                next();
            } else {
                next('/');
            }
        },
    },
    {
        path: '/trade',
        component: Trade,
        beforeEnter: (to, from, next) => {
            if (from.path === '/ShopCart') {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/shopcart',
        component: ShopCart
    },
    {
        path: '/addCartSuccess',
        component: AddCartSuccess,
        // 路由守卫，如果没有商品数据与参数，不给过
        beforeEnter: (to, from, next) => {
            // 这个to是指将要去的路由，这一个回调函数发生在将要跳转到addCartSuccess页面，所以to中含有数据
            let skuNum = to.query.skuNum;
            // console.log(to,from);
            let skuInfo = sessionStorage.getItem('SKUINFO_KEY');
            if (skuNum && skuInfo) {
                next();
            } else {
                alert('请携带够参数');
                next('/');
            }
        }
    },
    {
        path: '/detail/:skuId?',
        component: Detail
    },
    {
        name: 'sousuo',
        path: '/search/:keyword?',   //?表示有或无，不管有没有参数都会匹配到，有就显示没有就直接/search。如果不加这个问号，且没有传参数，路由的匹配就有问题，地址栏没有search，但是好像有匹配上了
        component: Search,
        props(route) {
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
    {
        path: '/test',
        component: InterQues,
        meta: { isHiddenFooter: true }
    },
    {
        path:'/echarts',
        component:EchartsTest,
        children:[
            {
                path:'activeline',
                component: ActiveLine
            }
        ]
    }
]