import {RouterRecordRaw} from 'vue-router'

const publicRoutes : RouteRecordRaw[] = [
    {
        path:'/',
        name:'home',
        component: () => import('../../../pages/HomePage.vue'),
        meta: {layout: 'default'},
    },
    {
        path:'/about',
        name:'about',
        component: () => import('../../../pages/Aboutpage.vue'),
        meta: {layout: 'default'},
    },
    {
        path:'/contact',
        name:'contact',
        component: () => import('../../../pages/Contactpage.vue'),
        meta: {layout: 'default'},
    },
]
export default publicRoutes

