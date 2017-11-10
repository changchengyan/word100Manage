<template>
  <div class="lessonBriefEdit" @click="gotoDatabaseEditer">
      lessonBriefEdit
  </div>
</template>
<script>
export default {
     //data中放入属性，就像小程序中的data一样
    data(){
        return{

        }
    },
    // 所有的方法放在methods
    methods: {
        gotoDatabaseEditer(){
            this.$router.push('/manage/dataBaseEdit/funcManage')
        }
    },
    // 所有的过滤器放在filters
    filters: {

    },
    //所有的data中的属性都可以二次格式化处理
    computed: {

    },
    // DOM创建时,调用的钩子函数
    created(){

    },
    //页面加载完成时进行的回调
    mounted () {

    },
    //页面销毁时进行的回调
    destroyed () {

    }
}
</script>

<style scoped>

</style>

