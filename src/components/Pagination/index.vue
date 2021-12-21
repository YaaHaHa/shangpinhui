<template>
  <div class="pagination">
    <button :disabled="myCurrentPage === 1">上一页</button>
    <button v-if="startEnd.start > 1">1</button>
    <button v-if="startEnd.start > 1">···</button>

    <button v-for="n in startEndArr" :key="n">{{n}}</button>


    <button v-if="startEnd.end < totalPage">···</button>
    <button :disabled ="startEnd.end >= totalPage">下一页</button>

    <button style="margin-left: 30px">共{{total}}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      myCurrentPage: this.currentPage || 1,
    };
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      //每页数量
      type: Number,
      default: 10,
    },
    showPageNo: {
      //连续的页码数，一般为奇数
      type: Number,
      default: 3,
      vaildator: function (value) {
        return value % 2 === 1;
      },
    },
  },
  computed: {
    // 总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 开始页
    startEnd() {
      const { myCurrentPage, showPageNo, totalPage } = this;
      let start, end;
      //          4       -   (3-1)/2             =  3
      start = myCurrentPage - (showPageNo - 1) / 2;
      // start小于0，调一下
      if (start < 1) {
        start = 1;
      }
      //     3   +    3    -1 =5
      end = start + showPageNo - 1;

      //  当最后一些大于总页数时调一下
      if (end > totalPage) {
        end = totalPage;
        start = end - showPageNo + 1;
        if (start<1){
          start =1;
        }
      }
      return { start, end };
    },
    startEndArr() {
      // 取出开始与结束
      const { start, end } = this.startEnd;
      const arr = [];
      for (let i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>