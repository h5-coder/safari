<template>
    <div class="">
        主页
        <input type="text" v-model="value">
        <a :href="href">go</a>
        <br/>
        <a :href="href2">go</a>
        <button @click="go">跳转</button>
    </div>
</template>
<script>
// import  from ''
// import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'

export default {
    // 组件名
    name: "index",
    // 实例的数据对象
    data() {
        return {
            value:666,
            url:'http://192.168.1.91:8081/#/'
        };
    },
    // 数组或对象，用于接收来自父组件的数据
    props: {},
    // 计算
    computed: {
        href(){
            return `${this.url}index?value=${this.value}`
        },
        href2(){
            return `${this.url}index2?value=${this.value}`
        }
    },
    // 方法
    methods: {
        go() {
            this.$router.push({
                path: "index",
                query: {
                    value: 8
                }
            });
        }
    },
    // 生命周期函数 请求写在created中
    created() {},
    beforeMount() {},
    mounted() {},
    // 组件
    components: {},
    // 监视
    watch: {},
    // 过滤器
    filters: {},
    // 自定义指令
    directive: {}
};
</script>

<style lang="less" scoped>
.chart {
    width: 450px;
    height: 400px;
}
</style>
