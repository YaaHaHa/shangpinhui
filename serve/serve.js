const express = require('express');

const app = express();

const BaseCategoryLIst={
    "code": 200,
    "message": "成功",
    "data": [
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 1
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 1
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 1
        }
    ],
    "ok": true
}


// 请求物品分类
app.get('/api/product/getBaseCategoryList',(request, response)=>{
  response.send(BaseCategoryLIst);
})

app.listen(8080,()=>{
  console.log('8080端口监听中！');
})