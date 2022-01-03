const express = require('express');

const app = express();
// 引入参数解析模块
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())
// 主页分类列表
const BaseCategoryLIst = {
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

// Home页面轮播图数据
const HomeCarouselBannerData = {
    "code": 200,
    "message": "成功",
    "data": [
        {
            "id": 1,
            "title": "小米电视4A 70英寸 4K超高清 HDR 二级能效 2GB+16GB L70M5-4A 内置小爱",
            "imageUrl": "http://localhost:8000/images/banner1.jpg",
            "linkUrl": "http://item.atguigu.cn/21.html",
            "sort": 0
        },
        {
            "id": 3,
            "title": "test",
            "imageUrl": "http://localhost:8000/images/banner2.jpg",
            "linkUrl": "http://item.atguigu.cn/21.html",
            "sort": 0
        },
        {
            "id": 2,
            "title": "华为 HUAWEI P40 麒麟990 5G SoC芯片 5000万超感知徕卡三摄",
            "imageUrl": "http://localhost:8000/images/banner3.jpg",
            "linkUrl": "http://item.atguigu.cn/16.html",
            "sort": 1
        },
        {
            "id": 4,
            "title": "华为 HUAWEI P40 麒麟990 5G SoC芯片 5000万超感知徕卡三摄",
            "imageUrl": "http://localhost:8000/images/banner4.jpg",
            "linkUrl": "http://item.atguigu.cn/16.html",
            "sort": 1
        }
    ],
    "ok": true
}


// 所有商品列表
const goodsList =  [
    {
        "id": 1,
        "defaultImg": "http://localhost:8000/images/mobile01.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 2,
        "defaultImg": "http://localhost:8000/images/mobile02.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 3,
        "defaultImg": "http://localhost:8000/images/mobile03.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 4,
        "defaultImg": "http://localhost:8000/images/mobile04.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 5,
        "defaultImg": "http://localhost:8000/images/mobile01.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 6,
        "defaultImg": "http://localhost:8000/images/mobile05.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 7,
        "defaultImg": "http://localhost:8000/images/mobile06.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 8,
        "defaultImg": "http://localhost:8000/images/mobile02.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 9,
        "defaultImg": "http://localhost:8000/images/mobile03.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 10,
        "defaultImg": "http://localhost:8000/images/mobile05.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 11,
        "defaultImg": "http://localhost:8000/images/mobile05.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 12,
        "defaultImg": "http://localhost:8000/images/mobile05.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 13,
        "defaultImg": "http://localhost:8000/images/mobile04.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 14,
        "defaultImg": "http://localhost:8000/images/mobile06.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 15,
        "defaultImg": "http://localhost:8000/images/mobile03.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 16,
        "defaultImg": "http://localhost:8000/images/mobile01.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 17,
        "defaultImg": "http://localhost:8000/images/mobile02.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 18,
        "defaultImg": "http://localhost:8000/images/mobile05.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 19,
        "defaultImg": "http://localhost:8000/images/mobile04.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 20,
        "defaultImg": "http://localhost:8000/images/mobile02.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 21,
        "defaultImg": "http://localhost:8000/images/mobile01.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 22,
        "defaultImg": "http://localhost:8000/images/mobile03.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 23,
        "defaultImg": "http://localhost:8000/images/mobile02.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 24,
        "defaultImg": "http://localhost:8000/images/mobile05.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 25,
        "defaultImg": "http://localhost:8000/images/mobile01.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 26,
        "defaultImg": "http://localhost:8000/images/mobile02.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 27,
        "defaultImg": "http://localhost:8000/images/mobile03.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 28,
        "defaultImg": "http://localhost:8000/images/mobile05.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 29,
        "defaultImg": "http://localhost:8000/images/mobile06.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 30,
        "defaultImg": "http://localhost:8000/images/mobile01.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 31,
        "defaultImg": "http://localhost:8000/images/mobile03.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 32,
        "defaultImg": "http://localhost:8000/images/mobile01.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 33,
        "defaultImg": "http://localhost:8000/images/mobile04.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 34,
        "defaultImg": "http://localhost:8000/images/mobile02.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 35,
        "defaultImg": "http://localhost:8000/images/mobile05.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 36,
        "defaultImg": "http://localhost:8000/images/mobile01.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 37,
        "defaultImg": "http://localhost:8000/images/mobile04.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 38,
        "defaultImg": "http://localhost:8000/images/mobile03.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 39,
        "defaultImg": "http://localhost:8000/images/mobile01.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 40,
        "defaultImg": "http://localhost:8000/images/mobile03.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 41,
        "defaultImg": "http://localhost:8000/images/mobile02.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 42,
        "defaultImg": "http://localhost:8000/images/mobile01.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 43,
        "defaultImg": "http://localhost:8000/images/mobile06.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 44,
        "defaultImg": "http://localhost:8000/images/mobile04.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 45,
        "defaultImg": "http://localhost:8000/images/mobile06.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 46,
        "defaultImg": "http://localhost:8000/images/mobile03.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 47,
        "defaultImg": "http://localhost:8000/images/mobile05.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 48,
        "defaultImg": "http://localhost:8000/images/mobile01.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 49,
        "defaultImg": "http://localhost:8000/images/mobile03.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 51,
        "defaultImg": "http://localhost:8000/images/mobile06.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 52,
        "defaultImg": "http://localhost:8000/images/mobile02.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 53,
        "defaultImg": "http://localhost:8000/images/mobile02.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 54,
        "defaultImg": "http://localhost:8000/images/mobile03.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 55,
        "defaultImg": "http://localhost:8000/images/mobile05.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 56,
        "defaultImg": "http://localhost:8000/images/mobile02.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 57,
        "defaultImg": "http://localhost:8000/images/mobile04.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 58,
        "defaultImg": "http://localhost:8000/images/mobile02.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 59,
        "defaultImg": "http://localhost:8000/images/mobile01.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 60,
        "defaultImg": "http://localhost:8000/images/mobile05.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 61,
        "defaultImg": "http://localhost:8000/images/mobile04.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
    {
        "id": 50,
        "defaultImg": "http://localhost:8000/images/mobile05.png",
        "title": "Apple iPhone 11 (A2223)",
        "price": 6088,
        "createTime": null,
        "tmId": null,
        "tmName": null,
        "category1Id": null,
        "category1Name": null,
        "category2Id": null,
        "category2Name": null,
        "category3Id": null,
        "category3Name": null,
        "hotScore": 0,
        "attrs": "Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)"
    },
]

// Search页面的数据
const searchData = {
    "code": 200,
    "message": "成功",
    "data": {
        "trademarkList": [
            {
                "tmId": 1,
                "tmName": "苹果"
            },
            {
                "tmId": 2,
                "tmName": "华为"
            },
            {
                "tmId": 3,
                "tmName": "华为"
            },
            {
                "tmId": 4,
                "tmName": "华为"
            },
            {
                "tmId": 5,
                "tmName": "华为"
            },
            {
                "tmId": 6,
                "tmName": "华为"
            },
            {
                "tmId": 7,
                "tmName": "索尼"
            },
            {
                "tmId": 8,
                "tmName": "索尼"
            },
            {
                "tmId": 9,
                "tmName": "小米"
            },
        ],
        "attrsList": [
            {
                "attrId": 2,
                "attrValueList": [
                    "GSM（移动/联通2G）",
                    "电信2G",
                    "电信3G",
                    "移动3G",
                    "联通3G",
                    "联通4G",
                    "电信3G",
                    "移动3G",
                    "联通3G",
                    "联通4G"
                ],
                "attrName": "网络制式"
            },
            {
                "attrId": 3,
                "attrValueList": [
                    "4.0-4.9英寸",
                    "4.0-4.9英寸"
                ],
                "attrName": "显示屏尺寸"
            },
            {
                "attrId": 4,
                "attrValueList": [
                    "1200万以上",
                    "800-1199万",
                    "1200-1599万",
                    "1600万以上无摄像头"
                ],
                "attrName": "摄像头像素"
            },
            {
                "attrId": 5,
                "attrValueList": [
                    "0-500元",
                    "500-1199元",
                    "1000-1500元",
                    "2000-3000元",
                    "3000元以上"
                ],
                "attrName": "价格"
            },
            {
                "attrId": 6,
                "attrValueList": [
                    "特点",
                    "系统",
                    "手机内存",
                    "单卡双卡",
                    "其他"
                ],
                "attrName": "更多筛选项"
            },

        ],
        goodsList,
        "total": 8,
        "pageSize": 2,
        "pageNo": 1,
        "totalPages": 4
    },
    "ok": true
};
let n = 1;

// 商品详情
const datailInfo ={
    "code": 200,
    "message": "成功",
    "data": {
        "valuesSkuJson": "{\"3|5|7\":6,\"3|4|7\":2,\"2|4|7\":3,\"1|5|7\":5,\"1|4|7\":1,\"2|5|7\":4}",
        "price": 5499,
        "categoryView": {
            "id": 61,
            "category1Id": 2,
            "category1Name": "手机",
            "category2Id": 13,
            "category2Name": "手机通讯",
            "category3Id": 61,
            "category3Name": "手机"
        },
        "spuSaleAttrList": [
            {
                "id": 1,
                "spuId": 1,
                "baseSaleAttrId": 1,
                "saleAttrName": "选择颜色",
                "spuSaleAttrValueList": [
                    {
                        "id": 2,
                        "spuId": 1,
                        "baseSaleAttrId": 1,
                        "saleAttrValueName": "黑色",
                        "saleAttrName": "选择颜色",
                        "isChecked": "0"
                    },
                    {
                        "id": 3,
                        "spuId": 1,
                        "baseSaleAttrId": 1,
                        "saleAttrValueName": "金色",
                        "saleAttrName": "选择颜色",
                        "isChecked": "0"
                    },
                    {
                        "id": 4,
                        "spuId": 1,
                        "baseSaleAttrId": 1,
                        "saleAttrValueName": "银色",
                        "saleAttrName": "选择颜色",
                        "isChecked": "0"
                    },
                ]
            },
            {
                "id": 5,
                "spuId": 1,
                "baseSaleAttrId": 2,
                "saleAttrName": "选择版本",
                "spuSaleAttrValueList": [
                    {
                        "id": 6,
                        "spuId": 1,
                        "baseSaleAttrId": 2,
                        "saleAttrValueName": "16GB",
                        "saleAttrName": "选择版本",
                        "isChecked": "0"
                    },
                    {
                        "id": 7,
                        "spuId": 1,
                        "baseSaleAttrId": 2,
                        "saleAttrValueName": "64GB",
                        "saleAttrName": "选择版本",
                        "isChecked": "0"
                    },
                    {
                        "id": 8,
                        "spuId": 1,
                        "baseSaleAttrId": 2,
                        "saleAttrValueName": "128GB",
                        "saleAttrName": "选择版本",
                        "isChecked": "0"
                    },
                    {
                        "id": 9,
                        "spuId": 1,
                        "baseSaleAttrId": 2,
                        "saleAttrValueName": "256GB",
                        "saleAttrName": "选择版本",
                        "isChecked": "0"
                    },
                ]
            },
            {
                "id": 10,
                "spuId": 1,
                "baseSaleAttrId": 2,
                "saleAttrName": "选择版本",
                "spuSaleAttrValueList": [
                    {
                        "id": 11,
                        "spuId": 1,
                        "baseSaleAttrId": 2,
                        "saleAttrValueName": "公开版",
                        "saleAttrName": "选择版本",
                        "isChecked": "0"
                    },
                    {
                        "id": 12,
                        "spuId": 1,
                        "baseSaleAttrId": 2,
                        "saleAttrValueName": "移动版",
                        "saleAttrName": "选择版本",
                        "isChecked": "0"
                    },
                    
                ]
            },
            {
                "id": 13,
                "spuId": 1,
                "baseSaleAttrId": 3,
                "saleAttrName": "选择套装",
                "spuSaleAttrValueList": [
                    {
                        "id": 14,
                        "spuId": 1,
                        "baseSaleAttrId": 3,
                        "saleAttrValueName": "官方标配",
                        "saleAttrName": "选择套装",
                        "isChecked": "0"
                    },
                    {
                        "id": 15,
                        "spuId": 1,
                        "baseSaleAttrId": 3,
                        "saleAttrValueName": "优惠移动版",
                        "saleAttrName": "选择套装",
                        "isChecked": "0"
                    },
                    {
                        "id": 16,
                        "spuId": 1,
                        "baseSaleAttrId": 3,
                        "saleAttrValueName": "电信优惠版",
                        "saleAttrName": "选择套装",
                        "isChecked": "0"
                    },
                ]
            }
        ],
        "skuInfo": {
            "id": 2,
            "spuId": 1,
            "price": 5499,
            "skuName": "Apple iPhone 11 (A2223) 64GB 红色 移动联通电信双卡双待",
            "skuDesc": "主体\n入网型号\nA2223\n品牌\nApple\n产品名称\niPhone 11\n上市年份\n2019年\n上市月份\n9月\n基本信息\n机身颜色\n红色\n机身长度（mm）\n150.9\n机身重量（g）\n194\n机身材质工艺\n以官网信息为准\n机身宽度（mm）\n75.7\n机身材质分类\n玻璃后盖\n机身厚度（mm）\n8.3\n运营商标志或内容\n无",
            "weight": "0.47",
            "tmId": 1,
            "category3Id": 61,
            "skuDefaultImg": "http://localhost:8000/images/s1.png",
            "isSale": 1,
            "skuImageList": [
                {
                    "id": 6,
                    "skuId": 2,
                    "imgName": "s1.jpg",
                    "imgUrl": "http://localhost:8000/images/s1.png",
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 7,
                    "skuId": 2,
                    "imgName": "s2.jpg",
                    "imgUrl": "http://localhost:8000/images/s2.png",
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 8,
                    "skuId": 2,
                    "imgName": "s3.jpg",
                    "imgUrl": "http://localhost:8000/images/s3.png",
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 9,
                    "skuId": 2,
                    "imgName": "s1.jpg",
                    "imgUrl": "http://localhost:8000/images/s1.png",
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 10,
                    "skuId": 2,
                    "imgName": "s2.jpg",
                    "imgUrl": "http://localhost:8000/images/s2.png",
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 11,
                    "skuId": 2,
                    "imgName": "s3.jpg",
                    "imgUrl": "http://localhost:8000/images/s3.png",
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 12,
                    "skuId": 2,
                    "imgName": "s1.jpg",
                    "imgUrl": "http://localhost:8000/images/s1.png",
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 13,
                    "skuId": 2,
                    "imgName": "s2.jpg",
                    "imgUrl": "http://localhost:8000/images/s2.png",
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 14,
                    "skuId": 2,
                    "imgName": "s3.jpg",
                    "imgUrl": "http://localhost:8000/images/s3.png",
                    "spuImgId": 2,
                    "isDefault": "0"
                },
            ],
            "skuAttrValueList": [
                {
                    "id": 15,
                    "attrId": 1,
                    "valueId": 6,
                    "skuId": 2
                },
            ],
            "skuSaleAttrValueList": null
        }
    },
    "ok": true
}

// 添加购物车后的状态返回
const addCarState ={
    "code": 200,
    "message": "成功",
    "data": null,
    "ok": true
}




const ShopCartList = {
    "code": 200,
    "message": "成功",
    "data": [
        {
            "id": 61,
            "userId": "2",
            "skuId": 4,
            "cartPrice": 5999,
            "skuNum": 4,
            "imgUrl": "http://192.168.200.128:8080xxx.jpg",
            "skuName": "Apple iPhone 11 (A2223) ",
            "isChecked": 1,
            "skuPrice": 5999
        },
        {
            "id": 62,
            "userId": "2",
            "skuId": 2,
            "cartPrice": 5499,
            "skuNum": 1,
            "imgUrl": "http://192.168.200.128:8080/yyyy.jpg",
            "skuName": "Apple iPhone 11 (A2223) 64GB 红色",
            "isChecked": 0,
            "skuPrice": 5499
        }
    ],
    "ok": true
}

const emptyShopCartList = {
    "code": 200,
    "message": "成功",
    "data": [],
    "ok": true
}



// 设置静态资源路径
app.use(express.static('asset'))

// 请求物品分类
app.get('/api/product/getBaseCategoryList', (request, response) => {
    console.log('有人请求了，请求的地址是：', request.url, n++);
    response.send(BaseCategoryLIst);
})


// 首页轮播广告
app.get('/api/cms/banner', (request, response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);
    response.send(HomeCarouselBannerData);

})
/* 
搜索页数据请求
/api/list
POST
请求体参数

*/
app.post('/api/list', (request, response) => {
    // 响应体设置内容类型
    // response.setHeader('Content-Type','text/plain');
    // 如果请求中有trademark就更改列表，观察有没有数据渲染
    if (request.body.trademark) {
        response.send({
            ...searchData,
            "data": {
                ...searchData.data,
                "trademarkList": [
                    {
                        "tmId": `${request.body.trademark.split(":")[0]}`,
                        "tmName": `${request.body.trademark.split(":")[1]}`
                    }
                ]
            }
        });
    } else{
        response.send(searchData);
    }

    console.log('有人请求了，请求地址是：', request.url, request.body, n++);
    // console.log('有人请求了，请求体内容是：', request, n++);
})

// 详情页的内容
app.get('/api/item/:skuId?', (request,response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);
    response.send(datailInfo);

})


// 添加购物车后是否添加成功。？标识模糊匹配，有没有skuId都能匹配上，
// 两个都要加，因为如果只加skuId，如果只有一个参数请求一过来发现skuId可有可无，那就被认为是skuNum的值
app.post('/api/cart/addToCart/:skuId?/:skuNum?',(request,response)=>{
    console.log('有人请求了，请求地址是：', request.url, n++);
    let {skuId, skuNum} = request.params.skuNum;

        /* let addGoods = {}
        goodsList.forEach ((goods) => {
          if (goods.id == skuId){
            //   找到被添加进购物车的goods，添加进ShopCartList中
            addGoods = {
                // "userId":localStorage.getItem('USER_KEY'),
                "cartPrice":goods.price,
                skuNum,
                "imgUrl":goods.defaultImg,
                "skuName":goods.title,
                "isChecked":"1",
                "skuPrice":goods.price
            }
            ShopCartList.data.push(addGoods);
            response.send(addCarState);
            return;
          } 
        });
        if (!addGoods) {
            response.send({
                code:"404"
            })
            return;
        } */
        response.send(addCarState);
})

// 请求购物车列表
app.get('/api/cart/cartList',(request,response)=>{
    console.log('有人请求了，请求地址是：', request.url, n++);
    if (request.get('userTempId')){
        // 如果请求头中携带了用户标识，那么就发挥一个有效的，不然就是一个空的没有商品数据的
        response.send(ShopCartList);
    } else {
        response.send(emptyShopCartList)

    }
})

app.listen(8000, () => {
    let n = 1;
    console.log('8000端口监听中！');
})
