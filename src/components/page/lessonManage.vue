<template>
    <div class="lessonManage">
        <div class="top-abstract">
            <el-row>
                <el-col :span="24" class="wrap-card">
                    <div class="brief-pic">
                        <img src="../../assets/template_book.png" alt="">
                    </div>
                    <div class="brief-str">
                        <div class="left-side">
                            <div class="title">
                                PEPPrimaryEnglishStudentsis book 义务教育课程实验系列教科 书（新版）老师特别辑 必考单词大 合集撒的的速度速度的速度速度速度的速度桉树
                            </div>
                            <div class="keyWord">
                                英语 六年级 期中考试
                            </div>
                            <div class="price">
                                <div class="num">价格：<span class="price-num">3.00</span></div>
                                <div class="ads">期中限时优惠</div>
                            </div>
                            <div class="explaination-content">
                                这个作业的作用是计算单词在输入文件中出现的次数。安排老师提炼单词，这些结果表明：语境对单词识别的作用点会随着不同的条件而改变；研究这么还发现一种叫做睡眠纺锤波的的大脑活动在记忆单词的能力方发挥着作用。研究这么还发现一种叫做睡眠纺锤波的的大脑活动在记忆单词的能力方面发挥着作用
                            </div>
                        </div>
                        <div class="right-side">
                            <img src="../../assets/edit_gray.png" alt="">
                            <span>修改</span>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="middle-content ">
            <el-menu :default-active="activeIndex" class="el-menu-demo nav-card" unique-opened router mode="horizontal" @select="handleSelect">
                <el-menu-item index="/manage/lessonManage/funcManage">
                    <span class="function-str">单词管理</span>
                    <span class="function-num">0</span>
                </el-menu-item>
                <el-menu-item index="/manage/lessonManage/caseManage">
                    <span class="function-str">关卡管理</span>
                    <span class="function-num">0</span>
                </el-menu-item>
                <el-menu-item index="/manage/lessonManage/statisticsManage">统计分析</el-menu-item>
                <el-menu-item index="/manage/lessonManage/importData" class='btn-import'>
                    导入数据
                </el-menu-item>
            </el-menu>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                activeIndex: '/manage/lessonManage/funcManage'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {},
        created() {
            // this.lastIndex=this.items.length-1;
        }
    }
</script>

<style scoped>
    .lessonManage {
        width: 100%;
        /* height: 100%; */
        height:80%;
    }
    .top-abstract{
        width: 100%;
        height: 171px;
        box-sizing: border-box;
    }
    .wrap-card {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background: #fff;
    }

    .wrap-card .brief-pic {
        width: 150px;
        height: 150px;
        margin-right: 16px;
    }

    .wrap-card .brief-pic img {
        width: 150px;
    }

    .brief-str {
        width: 100%;
        display: flex;
        justify-content: space-between;
        text-align: left!important;
    }

    .brief-str .left-side {
        /* padding-right: 300px; */
    }

    .brief-str .left-side .title {
        font-size: 13px;
        color: #333;
    }

    .brief-str .left-side .keyWord {
        font-size: 12px;
        color: #666;
        line-height: 28px;
    }

    .brief-str .left-side .price {
        font-size: 16px;
        color: #333;
        line-height: 36px;
    }

    .brief-str .left-side .explaination-content {
        font-size: 12px;
        color: #999;
    }

    .price {
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }

    .right-side {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        /* align-items: center; */
        font-size: 14px;
        color: #999;
        line-height: 14px;
    }

    .right-side img {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 5px;
        cursor: pointer;
    }

    .right-side span {
        cursor: pointer;
    }


    /* 功能选项卡  重置原有样式*/

    .middle-content {
        width: 100%;
        /* height: calc(100% - 171px); */
        height: 100%;
        margin-top: 20px;
        background-color: #fff;
        /* overflow: hidden; */
    }

    .nav-card {
        width: 100%;
        height: 52px;
    }

    .el-menu--horizontal {
        border-bottom: 0 !important;
        height: 52px;
        width: 100%;
        background: #eaf5fb;
    }

    .el-menu-item {
        /* width: 100%; */
        border: 0!important;
        height: 52px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #999 !important;
    }

    .el-menu-item span {
        line-height: 20px;
    }

    .el-menu-item:hover {
        height: 52px;
        background-color: transparent
    }

    .el-menu-item:visited {
        height: 52px;
        border: 0!important;
    }

    .el-menu-item.is-active {
        background-color: #fff;
        color: #319bd7!important;
        font-size: 14px !important;
        border: 0;
        height: 52px;
    }

    .btn-import {
        margin-top: 10px;
        width: 120px;
        height: 32px;
        background: #319bd7;
        color: #fff!important;
        border-radius: 5px;
        float: right;
        margin-right: 10px;
    }

    .btn-import:hover {
        height: 32px;
        background-color: #319bd7;
        color: #fff;
    }

    .btn-import.is-active {
        height: 32px;
        background-color: #319bd7;
        color: #fff!important;
    }
</style>
