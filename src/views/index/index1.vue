<template>
    <div class="">
        主页1111
        {{valvue}}
    </div>
</template>
<script>
// import  from ''
// import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'

export default {
    // 组件名
    name: "index1",
    // 实例的数据对象
    data() {
        return {
            valvue:''
        };
    },
    // 数组或对象，用于接收来自父组件的数据
    props: {},
    // 计算
    computed: {},
    // 方法
    methods: {},
    // 生命周期函数 请求写在created中
    created() {
        this.valvue=this.$router.query.valvue
    },
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
