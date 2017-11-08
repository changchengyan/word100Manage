<template>
    <div class="login-wrap">
        <div class="ms-title">WELCOME</div>
        <div class="ms-login">
            <div class="left-pic">
                <img src="../../assets/word100.png" alt="" style="display:block;width:320px">
            </div>
            <div class="right-form">
                <div class="word100-logo" style="margin-bottom:40px;display:flex;justify-content:center;">
                    <img src="../../assets//elephent.png" alt="">
                </div>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="form-ruleForm">
                    <el-form-item prop="username" class="iptName">
                        <el-input v-model="ruleForm.username" placeholder="账户" class="input-ruleForm"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input class="input-ruleForm" suffix-icon="el-icon-search" type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                                 <p class="ifShow-Error">{{rules.formName.passwordError}}</p>
                    </el-form-item>
                    <div class="getMy-password">忘记密码</div>
                    <div class="login-btn" @click="submitForm('ruleForm')">
                        登录
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
    export default {
        data: function() {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }],
                    formName:{
                        passwordError:""
                    }
                }
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;
                //  Axios.get('../../src/php/login.php?user='+user+'&password='+password)
                //      .then(function(res){
                //         console.log(res)

                //      })
                //      .catch(function(){

                //      })
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('ms_username', self.ruleForm.username);
                        self.$router.push('/manage/lessonManage');
                        console.log("1242353");
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background: url('../../assets/word100_bg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .ms-title {
        width: 100%;
        padding-top: 8%;
        text-align: center;
        font-size: 46px;
        font-weight: 600;
        color: #fff;
    }

    .ms-login {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 760px;
        height: 440px;
        margin: 0 auto;
        margin-top: -220px;
        margin-left: -380px;
        border-radius: 5px;
        background: #fff;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .left-pic {
        width: 300px;
        height: 440px;
        background-color: #e7f8ff;
        overflow: hidden;
    }

    .right-form {
        box-sizing: border-box;
        width: 460px;
        height: 440px;
        padding: 50px 72px 36px;
    }

    .getMy-password {
        font-size: 14px;
        color: #319bd7;
        margin-top: 30px;
        margin-bottom: 40px;
        text-align: right;
    }

    .login-btn {
        text-align: center;
        width: 240px;
        height: 44px;
        background: -webkit-linear-gradient(left, #60cbfd 0%, #319bd7 100%);
        background: -o-linear-gradient(left, #60cbfd 0%, #319bd7 100%);
        background: -ms-linear-gradient(left, #60cbfd 0%, #319bd7 100%);
        background: linear-gradient(to right, #60cbfd 0%, #319bd7 100%);
        line-height: 44px;
        color: #fff;
        font-weight: 700;
        border-radius: 22px;
        margin: 0 auto;
    }
    .ifShow-Error{
        font-size: 12px;
        color:#d56968
    }
</style>
