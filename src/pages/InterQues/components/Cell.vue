<template>
    <div class="item">
        <div class="left">
            <img src="" alt="###">
        </div>
        <main>
            <div class="top">
                <p class="name"><span>用户名</span></p>
                <p class="apply"><span>申请加入群组（群组名称信息）</span></p>
            </div>
            <div class="bottom">
                <p><span>问题问题</span></p>
                <p><span>回答回答</span></p>
            </div>
        </main>
        <div class="right">
            <div class="buttonGroup" v-if="user_info.state === 0">
                <button @click="changeS(user_info.id, 2)">拒绝</button>
                <button @click="changeS(user_info.id, 1)">同意</button>
            </div>
            <p v-else-if="user_info.state === 1">已同意</p>
            <p v-else>已拒绝</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        user_info: {
            type: Object,
            require: true,
        },
        changeState: {
            type: Function,
            require: true,
        }
    },
    methods: {
        changeS(id,newState) {
            this.changeState(id,newState)
        },
    }
}
</script>

<style scoped>
.item {
    width: 400px;
    border: 1px solid #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
}

.item span {
    font-size: 12px;
    transform: scale(0.83);
    display: inline-block;
}

main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.top>p,
.bottom>p {
    float: left;
}

.name {
    margin-right: 20px;
}

.apply {}
</style>