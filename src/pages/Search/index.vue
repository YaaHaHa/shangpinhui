<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <!-- 这里的index是处理辨认的作用，删除时要确定是哪一个 -->
            <li
              class="with-x"
              v-for="(prop, index) in options.props"
              :key="prop"
            >
              {{ prop }}<i @click="removeprops(index)">×</i>
            </li>
            <li class="with-x" v-if="options.categoryName">
              {{ options.categoryName }}<i @click="removeCategory">×</i>
            </li>
            <li class="with-x" v-if="options.keyword">
              {{ options.keyword }}<i @click="removeKeyword">×</i>
            </li>
            <li class="with-x" v-if="options.trademark">
              {{ options.trademark }}<i @click="removeTrademark">×</i>
            </li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector :setTrademark="setTrademark" @setprops="setprops" />

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li :class="{ active: orderId === '1' }" @click="setOrder('1')">
                  <a href="javascript:">
                    综合
                    <i
                      class="iconfont"
                      :class="orderType === 'asc' ? 'icon-up' : ' icon-down'"
                      v-if="orderId === '1'"
                    ></i>
                  </a>
                </li>
                <li :class="{ active: orderId === '2' }" @click="setOrder('2')">
                  <a href="javascript:">
                    销量
                    <i
                      class="iconfont"
                      :class="orderType === 'asc' ? 'icon-up' : ' icon-down'"
                      v-if="orderId === '2'"
                    ></i>
                  </a>
                </li>
                <li :class="{ active: orderId === '3' }" @click="setOrder('3')">
                  <a href="javascript:">
                    新品
                    <i
                      class="iconfont"
                      :class="orderType === 'asc' ? 'icon-up' : ' icon-down'"
                      v-if="orderId === '3'"
                    ></i>
                  </a>
                </li>
                <li :class="{ active: orderId === '4' }" @click="setOrder('4')">
                  <a href="javascript:">
                    价格
                    <i
                      class="iconfont"
                      :class="orderType === 'asc' ? 'icon-up' : ' icon-down'"
                      v-if="orderId === '4'"
                    ></i>
                  </a>
                </li>
                <li :class="{ active: orderId === '5' }" @click="setOrder('5')">
                  <a href="javascript:">
                    评价
                    <i
                      class="iconfont"
                      :class="orderType === 'asc' ? 'icon-up' : ' icon-down'"
                      v-if="orderId === '5'"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li
                class="yui3-u-1-5"
                v-for="item in (productList.goodsList || '').slice(0,10)"
                :key="item.id"
              >
                <div class="list-wrap">
                  <div class="p-img">
                    <a href="javascript:" target="_blank"
                      ><img :src="item.defaultImg"
                    /></a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>￥</em>
                      <i>{{ item.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" :title="item.title">{{
                      item.attrs
                    }}</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <Pagination
            :currentPage="options.pageNo"
            :total="total"
            :pageSize="options.pageSize"
            :showPageNo="3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import SearchSelector from "./SearchSelector";
export default {
  name: "Search",
  data() {
    return {
      options: {
        categoryId1: "", // 一级分类ID
        categoryId2: "", // 二级分类ID
        categoryId3: "", // 三级分类ID 
        // categoryName: "", // 分类名称
        keyword: "", // 搜索关键字
        props: [], // ["属性ID:属性值:属性名"]示例: ["2:6.0～6.24英寸:屏幕尺寸"]
        trademark: "", // 品牌: "ID:品牌名称"示例: "1:苹果"
        order: "1:desc", // 排序方式 1: 综合,2: 价格 asc: 升序,desc: 降序 示例: "1:desc"
        pageNo: 8, // 页码
        pageSize: 10, // 每页数量
      },
    };
  },
  components: {
    SearchSelector,
  },
  /*   created() {  直接在watch中加上immediate在初始化时就调用了handler
    // 组件被创建时就去更新请求参数然后发送请求
    this.updateParams();
    // 发送请求获取搜索页数据
    this.sendReuest();
  }, */
  watch: {
    //这里是为了点击添加搜索条件的
    $route: {
      handler() {
        this.updateParams();
        this.sendReuest();
      },
      immediate: true,
    },
  },
  mounted() {},
  computed: {
    ...mapState({ productList: (state) => state.search.productList}),
    ...mapGetters('search',['total']), 
    // 当前培训的id
    orderId() {
      const { order } = this.options;
      return order.split(":")[0];
    },
    // 当前排序的类型
    orderType() {
      const { order } = this.options;
      return order.split(":")[1];
    },
    // 要传给Pagination的所有数据,由于数据是异步获取的，所以有那么一个时间段中是undefined，
    // undefined传过去不行，那边要用length，所以先用空数组顶一下
    /* total(){
      return this.productList.goodsList || [];
    } */

  },
  methods: {
    // 设置排序
    setOrder(orderFlag) {
      // 由于不能直接操作computed属性，所有拿出来方便使用
      let orderID = this.orderId;
      let orderTYPE = this.orderType;
      if (orderFlag === orderID) {
        orderTYPE = orderTYPE === "desc" ? "asc" : "desc"; //如果当前是desc就改成asc，如果不是desc那就改成desc
      } else {
        orderID = orderFlag;
        orderTYPE = "desc";
      }
      // 修改参数发一次请求
      this.options.order = orderID + ":" + orderTYPE;
      this.sendReuest();
    },
    // 删除属性搜索值
    removeprops(index) {
      const { props } = this.options;
      props.splice(index, 1);
      this.sendReuest();
    },
    setprops(prop) {
      // 获取点击到的属性，添加到options里发送请求
      const { props } = this.options;
      if (props.includes(prop)) return;
      props.push(prop);
      this.sendReuest();
    },

    // 设置搜索品牌
    setTrademark(trademark) {
      // 如果已有品牌信息，不执行
      if (this.options.trademark) return;
      /*  
      this.options.trademark = trademark;  假如options中没有trademark属性，这样是无法做到响应数据的，
      这样其实也能有效果，只不过是因为请求过来数据后页面一看有数据才显示 ，我们要的是一点就有效果，所以需要$set来数据响应
      */
      this.$set(this.options, "trademark", trademark);
      this.sendReuest();
    },
    // 清理品牌标签
    removeTrademark() {
      // this.options.trademark = "";
      this.$delete(this.options, "trademark");
      this.sendReuest();
    },
    // 清除类别标签，清除类别相关，然后刷新界面，怎么刷新页面？根据新的参数跳转
    removeCategory() {
      this.options.categoryName = "";
      this.options.categoryId1 = "";
      this.options.categoryId2 = "";
      this.options.categoryId3 = "";
      // 直接跳转，改变路径，触发watch，重新整合参数发送请求
      this.$router.replace({
        name: "sousuo",
        params: this.$route.keyword, //去掉的只是query相关参数，剩下的params原封不动的重新发送
      });
    },
    // 清除搜索关键字标签
    removeKeyword() {
      this.options.keyword = "";
      this.$router.replace({
        name: "sousuo",
        query: this.$route.query,
      });
      // 触发全局事件总线，使搜索框清空
      this.$bus.$emit("clearKeyword");
    },
    // 更新参数对象
    updateParams() {
      // 重新整理请求参数
      const { keyword } = this.$route.params;
      const { categoryName, categoryId1, categoryId2, categoryId3 } =
        this.$route.query;
      // 更新参数，整合搜索条件发请求。
      this.options = {
        ...this.options,
        keyword,
        categoryName,
        categoryId1,
        categoryId2,
        categoryId3,
      };
    },
    // 调用dispatch去发送请求
    sendReuest() {
      this.$store.dispatch("search/getProductList", this.options);
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>