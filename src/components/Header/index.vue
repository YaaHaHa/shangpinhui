<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p></p>
          <p v-if="userInfo.userName">
            <a href="javascript:void(0);">{{ userInfo.userName }}</a>
            <a href="javascript:void(0);" class="register" @click="logout">退出</a>
          </p>
          <p v-else>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link class="register" to="/register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/trade">我的订单</router-link>
          <router-link to="/ShopCart">我的购物车</router-link>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <a class="logo" title="尚品汇" href="###" target="_blank">
          <!-- 声明式路由导航，返回到首页 -->
          <router-link to="/">
            <img src="./images/logo.png" alt="" />
          </router-link>
        </a>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model.trim="keyWord"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="toSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    // 退出登录
    async logout(){
      try {
        await this.$store.dispatch('userInfo/requsrout');
        alert('退出成功');
      } catch (error) {
        alert(error.message);
      }
    },
    toSearch() {
      // 编程式路由组件要想携带params参数要用name属性！！！！！！！
      let location = {
        name: "sousuo",
      };
      // 如果数据为空  干脆就不要当做参数传进去，params容易出毛病
      // 如果当前的search是由三级列表点进来的，当前路径就有query参数，再点击搜索的时候把query参数带进来
      const query = this.$route.query;
      if (this.keyWord) {
        location.params = { keyword: this.keyWord };
        // location.query= { keyword2: this.keyWord.toUpperCase() };
        location.query = query; //把当前路径下的query参数拿过来连带新输入的params参数一同发送请求
      }
      // 跳转到sousuo，如果当前已经在search中，就replace，方便在导航栏返回
      if (this.$route.name === "sousuo") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
    },
  },
  mounted() {
    // 绑定自定义事件，等Search那边需要就会触发调用
    this.$bus.$on("clearKeyword", () => {
      this.keyWord = "";
    });
  },
  beforeDestroy() {
    this.$bus.$off("clearKeyword");
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo.userInfo,
    }),
  },
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>