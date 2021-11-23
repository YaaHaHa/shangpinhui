<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all">全部商品分类</h2>
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
      <div class="sort">
        <div class="all-sort-list2" @click="toSearch">
          <!-- 分类栏 -->
          <div class="item" v-for="category in categoryList" :key="category.categoryId">
            <h3>
              <!-- 每一个router-link都会生成一个组件对象，这太多了，就会卡顿 -->
              <!-- <router-link :to="`/search?categoryName=${category.categoryName}&category1Id=${category.categoryId}`">{{category.categoryName}}</router-link> -->
                <a href="javasctipt:;" :data-categoryName='category.categoryName' :data-categoryId1='category.categoryId'>{{category.categoryName}}</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore" v-for="categoryChild in category.categoryChild" :key="categoryChild.categoryId">
                  <dt>
                    <!-- <router-link :to="`/search?categoryName=${categoryChild.categoryName}&category1Id=${categoryChild.categoryId}`">{{categoryChild.categoryName}}</router-link> -->
                    <a href="javasctipt:;" :data-categoryName='categoryChild.categoryName' :data-categoryId2='categoryChild.categoryId'>{{categoryChild.categoryName}}</a>
                  </dt>
                  <dd>
                    <em v-for="categoryChild2 in categoryChild.categoryChild" :key="categoryChild2.categoryId">
                      <!-- <router-link :to="`/search?categoryName=${categoryChild2.categoryName}&category1Id=${categoryChild2.categoryId}`">{{categoryChild2.categoryName}}</router-link> -->
                      <a href="javasctipt:;" :data-categoryName='categoryChild2.categoryName' :data-categoryId3='categoryChild2.categoryId'>{{categoryChild2.categoryName}}</a>
                    </em>
                  </dd>
                </dl>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 为什么TypeNav要写在Component里面？因为不止Home中有出现，其他其他页面中也有
export default {
  name: "TypeNav",
  computed:{
    categoryList(){
      return this.$store.state.home.categoryList;
    }
  },
  methods:{
    toSearch(event){
      const target = event.target;
        // 注意获取data-categoryName自定义属性的数据要通过小写
        const {categoryname,categoryid1,categoryid2,categoryid3} = target.dataset;

        // 判断是否需要跳转
      if (categoryname){
        // 拿到被点击标签的数据准备路由切换中当参数
        const query ={
          categoryName : categoryname,
        };
        // 有哪个id用哪个id，层级不能错，所以id有123
        if (categoryid1){
          query.categoryId1=categoryid1;
        } else if (categoryid2){
          query.categoryId2=categoryid2;
        } else if (categoryid3){
          query.categoryId3 = categoryid3;
        }
        this.$router.push({ 
          name:'sousuo',    //注意这里是name还是path
          query,
        })
      }
    }
  }
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

          &:hover {
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