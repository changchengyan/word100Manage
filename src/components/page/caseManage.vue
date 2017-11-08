<template>
  <div class="caseManage ">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button>确认</el-button>
      <el-button><i class="el-icon-plus"></i>一键生成关卡</el-button>
      <el-button><i class="el-icon-plus"></i>生成关卡</el-button>
  </div>
</template>

<script>
export default {
    data () {
        return {
        input:''
        }
    },
    methods: {

      }
}
</script>

<style scoped>
    .el-input{
        width: 245px;
        height: 30px;
        font-size: 14px;
        color:#999;

    }
    .el-input .el-input__inner{
        height: 30px !important;
    }
    .el-button{
        width: 51px;
        height: 32px;
        border:1px solid #eee;
    }
</style>

