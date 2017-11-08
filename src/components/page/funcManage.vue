<template>
    <div class="funcManage ">
        <div class="wrap-tip">
            <img src="../../assets/none_data.png" alt="">
            <div class="tip">
                <span>您当前还没有单词，快去</span><span class="hightLight">新增单词</span>或<span class="hightLight">导入数据</span>吧
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .funcManage{
        width: 100%;
        height:100%;
        position: relative;
    }
    .wrap-tip{
        position: absolute;
        width: 400px;
        height: 400px;
        top:50%;
        left: 50%;
        margin-top: -200px;
        margin-left:-200px;
    }
    .wrap-tip img{
        display: inline-block;
        width:193px;
        height:133px;
        margin-bottom: 45px;
    }
    .tip {
        font-size: 14px;
        color: #999;
    }

    .hightLight {
        color: #319bd7;
    }
</style>

