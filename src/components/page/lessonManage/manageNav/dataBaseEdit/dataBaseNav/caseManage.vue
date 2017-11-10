<template>
    <div class="caseManage ">
        <div class="btn-wrap">
            <div class="btn-left">
                <input v-model="input" placeholder="请输入内容" class="el-input"></input>
                <el-button class="confirm">确认</el-button>
            </div>
            <div class="btns-right">
                <el-button class="oneTouch"><i class="el-icon-plus"></i>一键生成关卡</el-button>
                <el-button class="customsPass"><i class="el-icon-plus"></i>生成关卡</el-button>
            </div>
        </div>
        <div class="card-wrap">
            <el-row>
                <template v-for="(item,idx) in 6" >
                    <el-col :span="6" class="box-card" :key="idx">
                        <div class="el-card">
                            <div class="card-title">
                                <div class="card-str">
                                    关卡{{idx+1}}(10个单词)
                                </div>
                                <div class="card-logos">
                                    <i class="el-icon-rank"></i>
                                    <i class="el-icon-delete"></i>
                                </div>
                            </div>
                            <div class="card-list">
                                <el-table
                                    :data="tableData6"
                                    border
                                    height="200"
                                    style="width: 100%;"
                                    ref="multipleTable"
                                    tooltip-effect="dark"
                                    @selection-change="handleSelectionChange"
                                    >
                                    <el-table-column
                                    type="selection"
                                    width="55">
                                    </el-table-column>
                                    <el-table-column
                                    prop="id"
                                    label="ID"
                                    width="100">
                                    </el-table-column>
                                    <el-table-column
                                    prop="name"
                                    label="姓名">
                                    </el-table-column>
                                    <!-- <el-table-column
                                    prop="amount3"
                                    label="地址">
                                    </el-table-column> -->
                                </el-table>
                            </div>
                            <div class="fixed-btm">
                                <div class="left-add">
                                    <i class="el-icon-circle-plus"></i>
                                    <span>添加单词</span>
                                </div>
                                <div class="right-remove">
                                    <i class="el-icon-remove"></i>
                                    <span>移除(0)</span>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </template>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
                checkList: ['',''],
               tableData6: [{
                id: '12987122',
                name: '王小虎',
                amount1: '234',
                amount2: '3.2',
                amount3: 10
                }, {
                id: '12987123',
                name: '王小虎',
                amount1: '165',
                amount2: '4.43',
                amount3: 12
                }, {
                id: '12987124',
                name: '王小虎',
                amount1: '324',
                amount2: '1.9',
                amount3: 9
                }, {
                id: '12987125',
                name: '王小虎',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
                }, {
                id: '12987126',
                name: '王小虎',
                amount1: '539',
                amount2: '4.1',
                amount3: 15
                }],
                multipleSelection: []
            }
        },
        methods: {
             toggleSelection(rows) {
                if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
                } else {
                this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>

<style scoped>
    .caseManage {
        width: 100%;
        height: 100%;
        padding: 0 10px;
    }

    .caseManage .btn-wrap {
        width: 100%;
        height: 32px;
        margin: 10px 0;
        display: flex;
        justify-content: space-between
    }

    .el-input {
        display: inline-block;
        width: 245px;
        height: 30px;
        font-size: 14px;
        color: #999;
        /* outline: none; */
        /* -webkit-appearance: button; */
        /* -webkit-appearance: none; */
        border:none;
        border: 1px solid #eee;
        padding: 5px;
        box-sizing: border-box;
    }


    .confirm.el-button {
        width: 51px;
        height: 32px;
        border: 1px solid #eee;
        padding: 0 !important;
        margin-left: 5px;
    }

    .oneTouch.el-button {
        width: 150px;
        height: 32px;
        border: 1px solid #eee;
        padding: 0 !important;
    }

    .customsPass.el-button {
        width: 120px;
        height: 32px;
        border: 1px solid #eee;
        padding: 0 !important;
    }


    /* 卡片视图 */

    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        /* padding:0 10px; */
        padding-right:10px;
        height: 100%;
        padding-bottom: 10px;

    }

    .card-wrap {}

    .el-card {
        border: 1px solid #e6ebf5;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        color: #2d2f33;
        border-radius: 4px;
        overflow: hidden;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }

    .card-title{
        width: 100%;
        height: 40px;
        line-height: 40px;
        color: #319bd7;
        font-size:14px;
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid #eee;
    }
    .card-logos,.card-str{
        flex:50%;
    }
    .card-logos{
        text-align: right;
        padding-right: 20px;
    }
    .card-logos i{
        display: inline-block;
        margin-left: 10px;
    }

    .fixed-btm{
        width: inherit;
        height: 40px;
        padding:  0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f4fafb;
    }
    .fixed-btm div.left-add {
        color: #319bd7;
        font-size: 14px;
    }
    .fixed-btm div.right-remove {
        color: #999;
        font-size: 14px;
    }
</style>

