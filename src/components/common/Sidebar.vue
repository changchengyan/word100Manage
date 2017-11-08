<template>
    <div class="sidebar">
        <div class="manage-logo">
            <img src="../../assets/elephent_logo.png" alt="">
            <span class="logo-str">单词 100</span>
        </div>
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                    <!-- <template v-if="item.subs">
                        <el-submenu :index="item.index">
                            <template slot="title"><i :class="item.icon"></i>{{ item.title }}
</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>

<template v-else>
     -->
    <el-menu-item :index="item.index">
         <i :class="item.icon"></i>{{ item.title }}
    </el-menu-item>
    <!--
</template>-->
             </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [{
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '自述'
                    },
                    // {
                    //     icon: 'el-icon-menu',
                    //     index: '2',
                    //     title: '表格',
                    //     subs: [
                    //         {
                    //             index: 'basetable',
                    //             title: '基础表格'
                    //         },
                    //         {
                    //             index: 'vuetable',
                    //             title: 'Vue表格组件'
                    //         }
                    //     ]
                    // },
                    // {
                    //     icon: 'el-icon-date',
                    //     index: '3',
                    //     title: '表单',
                    //     subs: [
                    //         {
                    //             index: 'baseform',
                    //             title: '基本表单'
                    //         },
                    //         {
                    //             index: 'vueeditor',
                    //             title: '编辑器'
                    //         },
                    //         {
                    //             index: 'markdown',
                    //             title: 'markdown'
                    //         },
                    //         {
                    //             index: 'upload',
                    //             title: '文件上传'
                    //         }
                    //     ]
                    // },
                    {
                        icon: 'el-icon-star-on',
                        index: 'basecharts',
                        title: '图表'
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: 'drag',
                        title: '拖拽'
                    }
                ]
            }
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        }
    }
</script>

<style scoped>
    .sidebar {
        display: block;
        width: 180px;
        background: #fff;
        height: 100%;
    }

    .sidebar>ul {
        height: 100%;
    }

    .manage-logo {
        background-color: #319bd7;
        width: 180px;
        height: 70px;
        box-sizing: border-box;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .manage-logo img {
        width: 35px;
        height: 29px;
    }

    .manage-logo .logo-str {
        font-size: 18px;
        color: #fff;
        font-weight: 600;
        display: inline-block;
        margin-left: 5px;
    }

    .el-menu-item {
        width: 100%;
        height: 52px;
        padding-left:0 !important;
    }

    .el-menu-item.is-active {
        background:url('../../assets/item_hover_bg.png');
        background-size: 100% 100%;
        padding-left:0 !important;
    }
</style>
