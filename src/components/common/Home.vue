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
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        components: {
            vHead,
            vSidebar
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

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
   height:100%;
   overflow: hidden;
  }

  .el-main {
    background-color: #f5f5f5;
    text-align: center;
    margin-top: 20px;
    margin-left: 12px;
    margin-right: 12px;
    padding: 0 !important;
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

