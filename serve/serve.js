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
        "goodsList": [
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
        ],
        "total": 8,
        "pageSize": 2,
        "pageNo": 1,
        "totalPages": 4
    },
    "ok": true
};
let n = 1;


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

app.listen(8000, () => {
    let n = 1;
    console.log('8000端口监听中！');
})
