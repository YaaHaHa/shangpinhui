/* 
  包含应用的所有接口的接口请求函数
  函数内部调用ajax函数发送请求
  函数返回的是promise对象？因为请求是异步的，数据也是异步过来的。直接返回数据行不通，为了方便取出异步的结果返回Promise
*/
import ajax from './ajax.js'

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
