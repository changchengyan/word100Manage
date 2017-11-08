import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            redirect : {
                name: 'login'
            }
        },
        {
            path: '/manage',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path : 'lessonManage',
                    component : resolve =>require(['../components/page/lessonManage.vue'], resolve),
                    children:[
                        {
                            path : 'funcManage',
                            name:'funcManage',
                            component : resolve =>require(['../components/page/funcManage.vue'], resolve)
                        },
                        {
                            path : 'caseManage',
                            component : resolve => require(['../components/page/caseManage.vue'], resolve)
                        },
                        {
                            path : 'statisticsManage',
                            component : resolve => require(['../components/page/statisticsManage.vue'], resolve)
                        },
                        {
                        path: 'importData',
                        component: resolve => require(['../components/page/importData.vue'], resolve)
                        }
                    ]
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve) // vue-schart组件
                }
            ]
        },
        {
            path: '/login',
            name : 'login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
