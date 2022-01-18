<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="cartItem in cartList" :key="cartItem.id">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="cartItem.isChecked" @click="changeState(cartItem.id,cartItem.isChecked)">
          </li>
          <li class="cart-list-con2">
            <img :src="cartItem.imgUrl">
            <div class="item-msg">{{cartItem.skuName}}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{cartItem.cartPrice}}</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:void(0)" class="mins" @click="updateCart(cartItem.id,cartItem.skuNum-1)">-</a>
            <input autocomplete="off" type="text" :value="cartItem.skuNum" minnum="1" class="itxt" @change="updateCart(cartItem.id,$event.target.value)">
            <a href="javascript:void(0)" class="plus" @click="updateCart(cartItem.id,cartItem.skuNum+1)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{cartItem.cartPrice*cartItem.skuNum}}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none" class="sindelet" @click="removeCart(cartItem)">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" v-model="isCkeckoutAll">
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none" @click="removeAll()">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>{{cartNum}}</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{allMoney}}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn"  @click="toTrade">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';
  export default {
    name: 'ShopCart',
    beforeMount() {
      this.getCartList();
    },
    methods: {
      // 提交订单页
      toTrade(){
        this.$router.push('/trade')
      },
      // 删除所有被选中的商品
      async removeAll(){
        try {
          this.$store.dispatch('shopCar/reqDeleteshopcartAll');
          alert('全部删除成功');
          this.getCartList();
        } catch (error) {
          alert(error.message);
        }
      },
      // 删除购物车中商品
      async removeCart(cartItem){
        let {skuId,skuName} = cartItem;
        try {
          const result = this.$store.dispatch('shopCar/reqDeleteshopcart',skuId);
          alert(result);
          this.getCartList();
        } catch (error) {
          alert (error.message);
        }
      },
      // 更改购物车商品选中状态
       async changeState(skuId,isChecked){
        isChecked = isChecked == 1? '0':'1';
        try {

          const result = this.$store.dispatch('shopCar/reqUpdateCartState',{skuId,isChecked});
          alert('状态更新成功',result)

        } catch (error) {
          alert(error.message)
        }
        // 更新完购物车的转发后马上在重新获取最新的数据
        this.getCartList();
      },
      // 获取购物车列表
      getCartList(){
        this.$store.dispatch('shopCar/reqCarList');
      },

      // 更新购物车列表
      async updateCart(id,num){
        // 把num转换称String类型
        num = num.toString();
        // console.log('ShopCart中的数据'+id,num);
        num = num>=1? num : 1; 
        /* 
          需要根据请求过来响应的结果决定要不要下一步，而且await的Promise失败了就会抛出异常
        
        
        */

        try {
          //                                                          注意名字，这是对象的属性，不是函数的参数！！！                                        
          // const result = await this.$store.dispatch('shopCar/reqUpdateCartSuccess',{id,num});
          const result = await this.$store.dispatch('shopCar/reqUpdateCartSuccess',{skuId:id,skuNum:num});
          alert('更新购物车成功！',result);
        } catch (error) {
          alert('更新购物车失败',error.message);
        }
        // 更新完以后再一次获取后台的购物车数据
        this.getCartList();
      }
    },
    computed:{
      // ...mapState('shopCar',['cartList'])
      ...mapState({
        cartList: state => state.shopCar.cartList
      }),

      // 总商品数
      cartNum(){
        return this.cartList.reduce((acc,cur)=>{
          return acc+=cur.skuNum
        },0)
      },

      // 总价
      allMoney(){
        return this.cartList.reduce((acc,cur)=>{
          if (cur.isChecked){
            acc+=cur.cartPrice*cur.skuNum
          }
          return acc
        },0)
      },

      // 是否全选
      isCkeckoutAll:{
        get(){
          return this.cartList.every(c=> c.isChecked == 1)
        },
        async set(val){
          try {
            const result = await this.$store.dispatch('shopCar/reqUpdateCartStateAll',val?1:0);
            alert('成功全(不)选');
            this.getCartList();
          } catch (error) {
            alert(error.message);
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .cart {
    width: 1200px;
    margin: 0 auto;

    h4 {
      margin: 9px 0;
      font-size: 14px;
      line-height: 21px;
    }

    .cart-main {
      .cart-th {
        background: #f5f5f5;
        border: 1px solid #ddd;
        padding: 10px;
        overflow: hidden;

        &>div {
          float: left;
        }

        .cart-th1 {
          width: 25%;

          input {
            vertical-align: middle;
          }

          span {
            vertical-align: middle;
          }
        }

        .cart-th2 {
          width: 25%;
        }

        .cart-th3,
        .cart-th4,
        .cart-th5,
        .cart-th6 {
          width: 12.5%;

        }
      }

      .cart-body {
        margin: 15px 0;
        border: 1px solid #ddd;

        .cart-list {
          padding: 10px;
          border-bottom: 1px solid #ddd;
          overflow: hidden;

          &>li {
            float: left;
          }

          .cart-list-con1 {
            width: 15%;
          }

          .cart-list-con2 {
            width: 35%;

            img {
              width: 82px;
              height: 82px;
              float: left;
            }

            .item-msg {
              float: left;
              width: 150px;
              margin: 0 10px;
              line-height: 18px;
            }
          }


          .cart-list-con4 {
            width: 10%;

          }

          .cart-list-con5 {
            width: 17%;

            .mins {
              border: 1px solid #ddd;
              border-right: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }

            input {
              border: 1px solid #ddd;
              width: 40px;
              height: 33px;
              float: left;
              text-align: center;
              font-size: 14px;
            }

            .plus {
              border: 1px solid #ddd;
              border-left: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }
          }

          .cart-list-con6 {
            width: 10%;

            .sum {
              font-size: 16px;
            }
          }

          .cart-list-con7 {
            width: 13%;

            a {
              color: #666;
            }
          }
        }
      }
    }

    .cart-tool {
      overflow: hidden;
      border: 1px solid #ddd;

      .select-all {
        padding: 10px;
        overflow: hidden;
        float: left;

        span {
          vertical-align: middle;
        }

        input {
          vertical-align: middle;
        }
      }

      .option {
        padding: 10px;
        overflow: hidden;
        float: left;

        a {
          float: left;
          padding: 0 10px;
          color: #666;
        }
      }

      .money-box {
        float: right;

        .chosed {
          line-height: 26px;
          float: left;
          padding: 0 10px;
        }

        .sumprice {
          width: 200px;
          line-height: 22px;
          float: left;
          padding: 0 10px;

          .summoney {
            color: #c81623;
            font-size: 16px;
          }
        }

        .sumbtn {
          float: right;

          a {
            display: block;
            position: relative;
            width: 96px;
            height: 52px;
            line-height: 52px;
            color: #fff;
            text-align: center;
            font-size: 18px;
            font-family: "Microsoft YaHei";
            background: #e1251b;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>