/* 
  包含应用的所有接口的接口请求函数
  函数内部调用ajax函数发送请求
  函数返回的是promise对象？因为请求是异步的，数据也是异步过来的。直接返回数据行不通，为了方便取出异步的结果返回Promise
*/

import ajax from './ajax.js'
import mockAjax from './mockAjax'


/* 
首页三级分类
/api/product/getBaseCategoryList  GET
*/
export function reqCategoryList() {
  // return ajax.get('/product/getBaseCategoryList');
  // return ajax('/product/getBaseCategoryList'); 
  return ajax({
    url: '/product/getBaseCategoryList',
    // method: 'get'

  })
}

/* 
  首页广告轮播
    /api/cms/banner
    GET
    参数：无

*/
// export const reqCarouselData = () => ajax.get('/api/cms/banner');  因为二次封装就制定了baseURL为/api
export const reqCarouselData = () => ajax('/cms/banner')

// 获取mock模拟的今日推荐数据
export function reqRecommends() {
  return mockAjax('/recommends');
}

// 获取mock模拟的楼层数据
export function reqFloors () {
  return mockAjax('/floors');
}

/* 
  搜索页数据请求
  /api/list
  POST
  请求体参数
    reqParams为请求体参数
*/
export const reqSearch = (reqParams) => ajax.post('/list',reqParams);

/* 

  获取商品详情
  请求地址：/api/item/{ skuId }
  GET
  参数:skuId，string  商品id

*/
export const reqDetailInfo = (skuId) =>{
  return ajax({
    url:`/item/${skuId}`,
    method:'get'
  })
};

/* 
  添加购物车
  /api/cart/addToCart/{ skuId }/{ skuNum }
  POST
  skuID	string	Y	商品ID
  skuNum	string	Y	商品数量 正数代表增加 负数代表减少

*/
export const requpdateShopCar = (skuId,skuNum) =>{
  return ajax({
    url:`/cart/addToCart/${ skuId }/${ skuNum }`,
    method:'post'
  })
}

/* 
  获取购物车列表
  /api/cart/cartList
  GET
  无参数

*/
export const reqShopCartList =() => {
  return ajax({
    url:'/cart/cartList',
    method:'get'
  })
}

// 改变商品选中状态的请求
// get
// 参数：skuId   商品ID
//      isChecked   商品选中状态
//                  0代表取消选中
//     

export const reqUpdateShopCartState = (skuId,isChecked) =>{
  return ajax({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'get'
  })
}

// 删除购物车
// /api/cart/deleteCart/{skuId}
// DELETE
// 参数skuId   商品Id

export const reqDeleteShopCart = (skuId) =>{
  return ajax({
    url:`/cart/deleteCart/${skuId}`,
    method:'delete'
  })
}

/* 
  /api/user/passport/register
  注册用户
  POST
  请求体参数：
      手机号 string
      密码   string

*/

export const reqRegister = (userInfo) =>{
  return ajax({
    url:'/user/passport/register',
    method:'post',
    data:userInfo
  })
}

// 登录/api/user/passport/login
// POST
// 参数： phone,password

export const reqLogin = (userInfo) => {
  return ajax({
    url:'/user/passport/login',
    method:'post',
    data:userInfo
  })
}

// api/user/passport/auth/getUserInfo
// get
// 获取用户数据
export const reqUserInfo =() =>{
  return ajax({
    url:'/user/passport/auth/getUserInfo',
    method:'get'
  })
}


// 退出登录
// /api/user/passport/logout
// get

export const reqUserOut = ()=>{
  return ajax({
    url:'/user/passport/logout',
    method:'get'
  })
}


// 获取订单信息
export const reqTrade = ()=>{
  return ajax({
    url:'/order/auth/trade',
    method:'get'
  })
}

// 提交订单
// /api/order/auth/submitOrder?tradeNo={tradeNo}
// post
/*
  traderNo	string	Y	交易编号(拼接在路径中)
  consignee	string	Y	收件人姓名
  consigneeTel	string	Y	收件人电话
  deliveryAddress	string	Y	收件地址
  paymentWay	string	Y	支付方式
  (ONLINE代表在线)
  orderComment	string	Y	订单备注
  orderDetailList	Array	Y	存储多个商品对象的数组 
  */
export const reqSubTrade = (tradeNo,subTrade) =>{
  return ajax({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method:'post',
    data:subTrade
  })
}

// 获取订单信息
// /api/payment/weixin/createNative/{orderId}
// get

export const reqPayInfo =(orderId) => {
  return ajax({
    url:`/payment/weixin/createNative/?orderId=${orderId}`,
    method:'get',
  })
}


// 查询支付状态
export const reqPayState = (orderId) =>{
  return ajax({
    url:`/payment/weixin/queryPayStatus/${orderId}`,
    method:'get'
  })
}

// reqRegister({phone:'111',password:'111111'});
// reqShopCartList();