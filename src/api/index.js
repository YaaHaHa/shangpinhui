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
