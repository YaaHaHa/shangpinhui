<template>
  <div class="type-nav">
    <div class="container">
      <!-- 离开整个分类div时下标改成-2，其实改成多少无所谓，只是在匹配currentIndex与index时的前置判断条件 -->
      <div @mouseleave="hideFirst" @mouseenter="showFirst">
        <h2 class="all">全部商品分类</h2>
        <!-- 悬浮在每个分类上面时改下标为-1， -->
        <transition name="show">
          <!-- 
            这个动画的初始状态就是display:none;当鼠标移入时变block，设置了动画的开始位置透明度与高度为0 
            动画的结束时原始设置的样式
            -->
          <!-- 是否首先显示，只有在搜索页面是true，因为要做动画 -->
          <div class="sort" v-show="isShowFirst">
            <div class="all-sort-list2" @click="toSearch">
              <!-- 分类栏 -->
              <!-- 
            鼠标悬浮栏的突出展示：数据驱动显示，当鼠标移入，设置currentIndex与当前栏index相等时显示
                                              当鼠标移除时再把这个设置样式成立的条件破坏，currentIndex设成-1
           -->
              <div
                class="item"
                :class="{ active: currentIndex === index }"
                v-for="(category, index) in categoryList"
                :key="category.categoryId"
                @mouseenter="showSubList(index)"
              >
                <h3>
                  <!-- 每一个router-link都会生成一个组件对象，这太多了，就会卡顿 -->
                  <!-- <router-link :to="`/search?categoryName=${category.categoryName}&category1Id=${category.categoryId}`">{{category.categoryName}}</router-link> -->
                  <a
                    href="javasctipt:;"
                    :data-categoryName="category.categoryName"
                    :data-categoryId1="category.categoryId"
                    >{{ category.categoryName }}</a
                  >
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="categoryChild in category.categoryChild"
                      :key="categoryChild.categoryId"
                    >
                      <dt>
                        <!-- <router-link :to="`/search?categoryName=${categoryChild.categoryName}&category1Id=${categoryChild.categoryId}`">{{categoryChild.categoryName}}</router-link> -->
                        <a
                          href="javasctipt:;"
                          :data-categoryName="categoryChild.categoryName"
                          :data-categoryId2="categoryChild.categoryId"
                          >{{ categoryChild.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="categoryChild2 in categoryChild.categoryChild"
                          :key="categoryChild2.categoryId"
                        >
                          <!-- <router-link :to="`/search?categoryName=${categoryChild2.categoryName}&category1Id=${categoryChild2.categoryId}`">{{categoryChild2.categoryName}}</router-link> -->
                          <a
                            href="javasctipt:;"
                            :data-categoryName="categoryChild2.categoryName"
                            :data-categoryId3="categoryChild2.categoryId"
                            >{{ categoryChild2.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
// 为什么TypeNav要写在Component里面？因为不止Home中有出现，其他其他页面中也有

// 引入Lodash中方法创建节流函数
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    const path = this.$route.path;
    return {
      currentIndex: -2,
      isShowFirst: path == '/',  //如果是首页就显示一级列表
    };
  },
  computed: {
    categoryList() {
      return this.$store.state.home.categoryList;
    },
  },
  methods: {
    // 跳转到Search页面
    toSearch(event) {
      const target = event.target;
      // 注意获取data-categoryName自定义属性的数据要通过小写
      const { categoryname, categoryid1, categoryid2, categoryid3 } =
        target.dataset;

      // 判断是否需要跳转
      if (categoryname) {
        /* 
        因在search页面中要做参数的拼接，所以如果现在是由搜索进入的在search页面中，
        当前路径中就有params参数这里要接一下params参数
        
        */ 
        
        const params_keyword = this.$route.params.keyword;
        // 拿到被点击标签的数据准备路由切换中当参数
        const query = {
          categoryName: categoryname,
        };
        // 有哪个id用哪个id，层级不能错，所以id有123
        if (categoryid1) {
          query.categoryId1 = categoryid1;
        } else if (categoryid2) {
          query.categoryId2 = categoryid2;
        } else if (categoryid3) {
          query.categoryId3 = categoryid3;
        }
        this.$router.push({
          name: "sousuo", //注意这里是name还是path
          params:{keyword:params_keyword},
          query,
        });
      }
      // 跳转到search页面要先隐藏列表！！！！(为什么注了？因为data中做到了根据path动态设置isShowFirst)
      // this.hideFirst();
    },

    // 控制鼠标悬浮在列表上的高亮显示
    showSubList: throttle(
      function (index) {
        // 当没有离开整个分类div时才更新下标
        if (this.currentIndex != -2) {
          this.currentIndex = index;
        }
      },
      300
      // {
      //   // leading: true,  //第一次是否触发
      //   // trailing: false  //最后一次是否延迟触发，不能为false，不然如果在一个区间里只移动到一个位置且不移动，这一次就不会被触发
      // }
    ),
    // 是否先隐藏
    hideFirst(){
      // 离开整个分类div时下标改成-2，其实改成多少无所谓，只是在匹配currentIndex与index时的前置判断条件
      this.currentIndex = -2;
      // 如果在search页面就先隐藏，有动画
      if (this.$route.path == '/search'){
        this.isShowFirst=false;
      }
    },
    
    showFirst() {
      // 鼠标移入整个分类div时开始匹配二三级标签显示
      this.currentIndex = -1;
      // 改变isShowFirst使得上面的v-show显示
        this.isShowFirst = true;
    },
  },
};
</script>

<style lang="less" scpoed>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;


      &.show-enter-active,&.show-leave-active {
        transition: all .3s;
      }
      &.show-enter,&.show-leave-to{
        opacity: 0;
        height: 0;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.active {
            background-color: #ccc;
            .item-list {
              display: block;
            }
          }
        }
      }
      
    }
  }
}
</style>