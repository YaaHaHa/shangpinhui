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
                            "categoryId": 3
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 2
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 1
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 6
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 5
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 4
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 9
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 8
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 7
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 12
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 11
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 10
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 15
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 14
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 13
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 18
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 17
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 16
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 21
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 20
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 19
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 24
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 23
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 22
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 27
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 26
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 25
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 30
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 29
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 28
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 33
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 32
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 31
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 36
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 35
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 34
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 39
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 38
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 37
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 42
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 41
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 40
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 45
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 44
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 43
        },
        {
            "categoryChild": [
                {
                    "categoryChild": [
                        {
                            "categoryName": "电子书",
                            "categoryId": 48
                        }
                    ],
                    "categoryName": "电子书刊",
                    "categoryId": 47
                }
            ],
            "categoryName": "图书、音像、电子书刊",
            "categoryId": 46
        }
    ],
    "ok": true
}
let n=1;

// 请求物品分类
app.get('/api/product/getBaseCategoryList',(request, response)=>{
    console.log('有人请求了，请求的地址是：',request.url,n++);
  response.send(BaseCategoryLIst);
})

app.listen(8000,()=>{
    let n=1;
  console.log('8000端口监听中！');
})