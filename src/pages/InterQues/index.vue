<template>
    <div>
        <Cell v-for="user_info in userArr" :key="user_info.name" :user_info="user_info" :changeState="changeState" />
    </div>
</template>

<script>
import Cell from './components/Cell.vue'
export default {
    data() {
        return {
            userArr: [
                {
                    name: '用户1',
                    avatar: '',
                    question: '问题11111',
                    answer: '回答1111',
                    state: 0
                },
                {
                    name: '用户2',
                    avatar: '',
                    question: '问题22222',
                    answer: '回答2222',
                    state: 1
                },
                {
                    name: '用户3',
                    avatar: '',
                    question: '问题33333',
                    answer: '回答33333',
                    state: 2
                }
            ]
        }
    },
    methods: {
        changeState(id,newState) {
            let index = this.userArr.findIndex((i) => i.id === id)
            this.userArr[index].state = newState;
        }
    },
    components: {
        Cell
    }
}
</script>

<style scoped>
</style>