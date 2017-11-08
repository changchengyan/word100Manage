<template>
    <div class="wrapper">
        <el-container height="100%">
            <el-aside width="180px">
                <v-sidebar></v-sidebar>
            </el-aside>
            <el-container>
                <el-header>
                    <v-head></v-head>
                </el-header>
                <el-main>
                    <!-- <div class="content"> -->
                        <transition name="move" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    <!-- </div> -->
                </el-main>
                <el-footer>
                    <v-footer></v-footer>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import  vFooter from './Footer'
    export default {
        components: {
            vHead,
            vSidebar,
            vFooter
        }
    }
</script>


<style>
    .wrapper{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
     .el-header, .el-footer {
    background-color: #fff;
    color: #000;
    text-align: center;
    line-height: 40px;
    height: 40px !important;

  }
  .el-aside, .el-main {
      overflow: visible;
  }
  .el-footer{
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      align-items: center;
      line-height: 0px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
   height:100%;
   overflow: hidden;
  }

  .el-main {
    height: 100%;
    background-color: #f5f5f5;
    text-align: center;
    margin-top: 20px;
    margin-left: 12px;
    margin-right: 12px;
    padding: 0 !important;
    box-sizing: border-box;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container{
      height: 100%;
  }
  .el-header{
      padding: 0 !important;
  }

  /* .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
  .header{
      background: #fff;
  }
</style>

