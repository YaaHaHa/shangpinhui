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
export const reqaddShopCar = (skuId,skuNum) =>{
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
reqShopCartList();