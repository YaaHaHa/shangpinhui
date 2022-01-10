const express = require('express');
const fs = require('fs')
const app = express();
// 引入参数解析模块
const bodyParser = require('body-parser');
const { response, request } = require('express');
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())
// 主页分类列表


// Home页面轮播图数据



// 所有商品列表


// Search页面的数据

let n = 1;

// 商品详情


// 添加购物车后的状态返回
const addCarState = {
    "code": 200,
    "message": "成功",
    "data": null,
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
    // response.send(BaseCategoryLIst);
    // 直接返回文件数据
    response.sendFile('BaseCategoryLIst.json', { root: __dirname + "/asset/data" }, function (err) {
        if (err) {
            throw err;
        } else {
            console.log(__dirname + '/asset/data');
        }
    })
})


// 首页轮播广告
app.get('/api/cms/banner', (request, response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);
    // response.send(HomeCarouselBannerData);
    // 直接返回文件数据
    response.sendFile('HomeCarouselBannerData.json', { root: __dirname + "/asset/data" }, function (err) {
        if (err) {
            throw err;
        } else {
            console.log(__dirname + '/asset/data');
        }
    })

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
    const searchData = fs.readFileSync('./asset/data/searchData.json', { flag: "a+" }, function (err) {
        if (err) {
            throw err;
        }
    })
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
    } else {
        // 请求体中没有携带trademark就直接把文件返回过去喽
        // response.send(searchData);
        // 直接返回文件数据
        response.sendFile('searchData.json', { root: __dirname + "/asset/data" }, function (err) {
            if (err) {
                throw err;
            } else {
                console.log(__dirname + '/asset/data');
            }
        })
    }

    console.log('有人请求了，请求地址是：', request.url, request.body, n++);
    // console.log('有人请求了，请求体内容是：', request, n++);
})

// 详情页的内容
app.get('/api/item/:skuId?', (request, response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);
    // response.send(datailInfo);
    response.sendFile('datailInfo.json', { root: __dirname + "/asset/data" }, function (err) {
        if (err) {
            throw err;
        } else {
            console.log(__dirname + '/asset/data');
        }
    })

})


// 添加购物车后是否添加成功。？标识模糊匹配，有没有skuId都能匹配上，
/* 

    这一个请求要处理：
        通过传过来的skuId去goodsList中找对应的商品添加到ShopCartList中，如果ShopCartList中已经存在
        那就把那一条替换掉
    格外注意在这里读取到的数据，是buffer类型的，readFile过来后先toString()一下转成正常的数据，然后可以JSON.parse一下
    不能在循环发送返回，会报错 --Cannot set headers after they are sent to the client--
    如果在循环中一直没有设置返回体，在postman中会一直显示正在等待返回体
    在nodejs中记得用闭包处理for循环，不然for循环中拿到的一直都是最后的那个值
*/
// 两个都要加，因为如果只加skuId，如果只有一个参数请求一过来发现skuId可有可无，那就被认为是skuNum的值
app.post('/api/cart/addToCart/:skuId?/:skuNum?', (request, response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);
    let { skuId, skuNum } = request.params;

    // 读取商品列表，通过skuId找到被添加进购物车的信息
    const goodsL = JSON.parse(fs.readFileSync('./asset/data/goodsList.json', { flag: "a+" }, function (err, data) {
        if (err) {
            throw err;
        }
        return data;
    }).toString());  //读取出来的是二进制，记得转换一下再转成对象！！！

    // 读取购物车列表
    let cart = JSON.parse(fs.readFileSync('./asset/data/ShopCartList.json', { flag: 'a+' }, function (err, data) {
        if (err) {
            throw err;
        }
        return data;
    }).toString());

    let addGoods = {};
    // console.log(goodsL);
    // goodsL.forEach((goods) => {
    for (let i = 0; i < goodsL.length; i++) {
        // 用闭包哦，在nodejs里！！！
        (function (i) {
            if (goodsL[i].id == skuId) {
                //   找到被添加进购物车的goods，添加进ShopCartList中
                addGoods = {
                    "id": parseInt(skuId),
                    "userId": request.get('userTempId'),
                    "skuId": parseInt(skuId),
                    "cartPrice": goodsL[i].price,
                    "skuNum": parseInt(skuNum),
                    "imgUrl": goodsL[i].defaultImg,
                    "skuName": goodsL[i].title,
                    "isChecked": 1,
                    "skuPrice": goodsL[i].price
                }
                // 把新的商品推入到购物车列表数据中
                if (cart.data.length == 0) {     //如果当前购物车列表为空，直接添加进去就完事了
                    cart.data.push(addGoods);
                } else {
                    // 通过try...catch跳出循环，搭配throw new error
                    try {
                        cart.data.forEach((cartGood, index, cartArr) => {
                            if (cartGood.id != skuId) {
                                if (index >= cartArr.length - 1) {
                                    // 如果遍历到最后一个 id还是不一样，那就开始向数组中添加
                                    // 如果没有这一层判断，那么每次遇到一个不一样的id就添加，要判断是不是全遍历过了，然后再添加一个
                                    cart.data.push(addGoods);
                                    console.log('添加成功，被添加的id：', addGoods.id);
                                    // return true;
                                }

                            } else {
                                // 一旦找到id匹配上的，马上替换

                                // 如果数据中已存在对应商品，直接把最新的这一条数据给他，直接替换了，与视频里不一样，那个是以skuNum操作的
                                //找到这一个元素的下标，然后替换

                                cartArr[index] = addGoods;
                                console.log('替换成功，被替换的id：', addGoods.id);
                                throw new Error('hasFoundEqualGodos')
                            }

                        })
                    } catch (error) {
                        if (error.message != 'hasFoundEqualGodos') throw error;
                    }


                }



                // 写入添加购物车后新的数据，注意啊把数据转换成json再转过去，不然不行的
                fs.writeFileSync('./asset/data/ShopCartList.json', JSON.stringify(cart), function (err) {
                    if (err) {
                        throw err;
                    }
                    console.log('----------新增成功-------------');
                })
                // 返回成功的状态
                response.sendFile('addCarState.json', { root: __dirname + "/asset/data" }, function (err) {
                    if (err) {
                        throw err;
                    }
                });
                return;
            }
        })(i);

    };
    if (!addGoods) {
        response.send({
            "code": '404'
        })
    }
})

// 请求购物车列表
app.get('/api/cart/cartList', (request, response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);
    if (request.get('userTempId')) {
        // 如果请求头中携带了用户标识，那么就发挥一个有   效的，不然就是一个空的没有商品数据的
        // response.send(ShopCartList);
        response.sendFile('ShopCartList.json', { root: __dirname + '/asset/data' }, function (err) {
            if (err) throw err;
        })
    } else {
        response.send(emptyShopCartList);

    }
});

// 改变商品选中状态的请求
// get
// 参数：skuId   商品ID
//      isChecked   商品选中状态
//                  0代表取消选中
//                  1代表选中

// 读取购物车中的商品，然后遍历找到被更改的那一条，然后改isChecked
app.get('/api/cart/checkCart/:skuId?/:isChecked?', function (request, response) {

    console.log('有人请求了，请求地址是：', request.url, n++);
    // 拿到skuId与isChecked
    let { skuId, isChecked } = request.params;

    // 读取数据文件
    let cartList = {};
    fs.readFile('./asset/data/ShopCartList.json', (err, data) => {
        if (err) throw err;
        cartList = JSON.parse(data.toString());
        try {
            cartList.data.forEach((cart, index, arr) => {
                // 遍历找到那一个元素，然后更改属性值
                if (cart.id == skuId) {
                    // request参数过来是String类型的
                    arr[index].isChecked = parseInt(isChecked);
                    // 
                    fs.writeFile('./asset/data/ShopCartList.json', JSON.stringify(cartList), function (err) {
                        if (err) {
                            throw err;
                        }
                        console.log('----------修改' + skuId + '状态成功-------------');

                    })

                    response.send({
                        "code": 200,
                        "message": "成功",
                        "data": null,
                        "ok": true
                    })
                    // 写入完马上退出这个forEach循环
                    throw new Error('hasFoundisChecked');
                }
            })
        } catch (error) {
            if (error.message != 'hasFoundisChecked') throw error;
        }
    });


})

// 删除购物车
// /api/cart/deleteCart/{skuId}
// DELETE
// 参数skuId   商品Id


app.delete('/api/cart/deleteCart/:skuId?', (request, response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);
    let skuId = request.params.skuId;
    let cartList = {};
    fs.readFile('./asset/data/ShopCartList.json', (err, data) => {
        if (err) throw err;

        cartList = JSON.parse(data.toString());

        try {
            cartList.data.forEach((item, index, arr) => {
                // 遍历找到那一个
                if (item.id == skuId) {
                    arr.splice(index, 1);
                    // 开始写入
                    fs.writeFile('./asset/data/ShopCartList.json', JSON.stringify(cartList), function (err) {
                        if (err) {
                            throw err;
                        }
                        console.log('----------删除' + skuId + '状态成功-------------');
                        // 设置响应体
                        response.send({
                            "code": 200,
                            "message": "成功",
                            "data": null,
                            "ok": true
                        })
                    })
                    throw new Error('hasFoundDelete');
                }

            })
        } catch (error) {
            if (error.message != 'hasFoundDelete') throw error;
        }
    })
})


/* 
    /api/user/passport/register
    注册用户
    POST
    请求体参数：
        手机号 string
        密码   string

    
*/

// 获取请求体中的数据，然后写入到users.json中
app.post('/api/user/passport/register', (request, response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);

    let { phone, password } = request.body;
    console.log(phone, password);
    let users = {};
    fs.readFile('./asset/data/users.json', (err, data) => {
        if (err) throw err;
        users = JSON.parse(data.toString());

        // 如果用户数组长度为0，直接添加进去
        if (users.data.length == 0) {
            users.data.push({
                phone,
                password,
            });
            fs.writeFile('./asset/data/users.json', JSON.stringify(users), (err) => {
                if (err) throw err;
                response.send({
                    "code": 200,
                    "message": "成功",
                    "data": null,
                    "ok": true
                })
            })
        } else {
            try {
                console.log(users.data);
                users.data.forEach((item, index, arr) => {
                    if (item.phone != phone) {
                        if (index >= arr.length - 1) {
                            //   遍历一遍没发现有一样的phone，而且已经遍历到了最后一个，才能添加，如果说遍历不到最后一个发现一样的，就不会进入上一个if里面
                            arr.push({
                                phone,
                                password,
                            })
                            fs.writeFile('./asset/data/users.json', JSON.stringify(users), (err) => {
                                if (err) throw err;
                                response.send({
                                    "code": 200,
                                    "message": "成功",
                                    "data": null,
                                    "ok": true
                                })
                                throw new Error('success');
                            })
                        }
                    } else {
                        response.send({
                            "code": 200,
                            "message": "该用户已被注册"
                        })
                    }
                })
            } catch (error) {
                if (error.message != 'success') {
                    throw error;
                }
            }
        }

    })
})
// 登录/api/user/passport/login
// POST
// 参数： phone,password

app.post('/api/user/passport/login', (request, response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);
    let { phone, password } = request.body;
    let users = {};
    fs.readFile('./asset/data/users.json', (err, data) => {
        if (err) throw err;
        users = JSON.parse(data.toString());
        try {
            users.data.forEach((item, index, arr) => {
                if (item.phone == phone && item.password == password) {
                    response.send({
                        "code": 200,
                        "message": "成功",
                        "data": {
                            "nickName": "Administrator",
                            "name": "Admin",
                            "token": "90aa16f24d04c7d882051412f9ec45b",
                        },
                        "ok": true
                    }
                    )
                    throw new Error('found user success');
                } else {
                    if (index == arr.length - 1) {
                        // 到最后一个了还没匹配上手机号，那就是没这用户
                        response.send({
                            "code": 201,
                            "message": "失败",
                            "data": null,
                            "ok": false
                        })
                        throw new Error('手机号或密码输入错误');
                    }
                }
            })
        } catch (error) {
            if (error.message != 'found user success' && error.message != '手机号或密码输入错误') {
                throw error;
            }
        }
    })
})

// api/user/passport/auth/getUserInfo
// 获取用户数据
// get
// 没有效验请求头中的token
app.get('/api/user/passport/auth/getUserInfo', (request, response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);
    response.send({
        "code": 200,
        "data": {
            "userName": "Admin",

        }
    })
})

// 退出登录
// /api/user/passport/logout
// get
// 应该收回这个token，这个token失效，下一次再给一个新的
app.get('/api/user/passport/logout', (request, response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);
    response.send({
        "code": 200,
        "message": "成功",
        "data": null,
        "ok": true
    }
    )
})

// 获取订单信息
// /api/order/auth/trade
// get
// 没有身份效验，静态数据，没有和购物车数据想关联
app.get('/api/order/auth/trade', (request, response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);

    response.send({
        "code": 200,
        "message": "成功",
        "data": {
            "totalAmount": 196155,
            "userAddressList": [
                {
                    "id": 2,
                    "userAddress": "翻斗大街翻斗花园二号楼1001室",
                    "userId": 2,
                    "consignee": "胡图图",
                    "phoneNum": "15011111111",
                    "isDefault": "1"
                },
                {
                    "id": 3,
                    "userAddress": "翻斗大街翻斗花园二号楼1001室",
                    "userId": 3,
                    "consignee": "胡英俊",
                    "phoneNum": "15011111111",
                    "isDefault": "1"
                },
                {
                    "id": 4,
                    "userAddress": "北翻斗大街翻斗花园二号楼1001室",
                    "userId": 4,
                    "consignee": "张小丽",
                    "phoneNum": "15011111111",
                    "isDefault": "1"
                }
            ],
            "tradeNo": "1b23c1efc8144bfc83e51807f4e71d3a",
            "totalNum": 3,
            "detailArrayList": [
                {
                    "id": null,
                    "orderId": null,
                    "skuId": 4,
                    "skuName": "哈根达斯",
                    "imgUrl": "http://localhost:8000/images/test1.jpg",
                    "orderPrice": 9999,
                    "skuNum": 1,
                    "hasStock": null
                },
                {
                    "id": null,
                    "orderId": null,
                    "skuId": 5,
                    "skuName": "大嘴巴子",
                    "imgUrl": "http://localhost:8000/images/test2.jpg",
                    "orderPrice": 5999,
                    "skuNum": 2,
                    "hasStock": null
                },
                {
                    "id": null,
                    "orderId": null,
                    "skuId": 6,
                    "skuName": "冰淇淋",
                    "imgUrl": "http://localhost:8000/images/test1.jpg",
                    "orderPrice": 5999,
                    "skuNum": 3,
                    "hasStock": null
                }
            ]
        },
        "ok": true
    }
    )


})
// 提交订单页
// /api/order/auth/submitOrder?tradeNo={tradeNo}
// POST
/*
traderNo	string	Y	交易编号(拼接在路径中)
consignee	string	Y	收件人姓名
consigneeTel	string	Y	收件人电话
deliveryAddress	string	Y	收件地址
paymentWay	string	Y	支付方式
(ONLINE代表在线)
orderComment	string	Y	订单备注
orderDetailList	Array	Y	存储多个商品对象的数组 */
app.post("/api/order/auth/submitOrder", (request, response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);
    response.send({
        "code": 200,
        "message": "成功",
        "data": 71,   // orderId 订单号
        "ok": true
    }
    )
})

// 获取订单信息
// /api/payment/weixin/createNative/{orderId}
// get
// orderId
app.get('/api/payment/weixin/createNative', (request, response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);
    response.send({
        "code": 200,
        "message": "成功",
        "data": {
            "codeUrl": "weixin://wxpay/bizpayurl?pr=P0aPBJK",
            "orderId": 71,
            "totalFee": 0.01,
            "resultCode": "SUCCESS"
        },
        "ok": true
    }
    )
})

// 获取支付状态，有没有钱转过来
// /api/payment/weixin/queryPayStatus/{orderId}
// get
// 参数 支付订单Id
app.get('/api/payment/weixin/queryPayStatus/:orderId?', (request, response) => {
    console.log('有人请求了，请求地址是：', request.url, n++);

    // 支付中
        response.send(
            {
                "code": 200,
                "message": "支付成功",
                "data": null,
                "ok": false
            }

        )

    // 支付中
    /* response.send({
        "code": 205,
        "message": "支付中",
        "data": null,
        "ok": false
    }) */
})



app.listen(8000, () => {
    let n = 1;
    console.log('8000端口监听中！');
})
