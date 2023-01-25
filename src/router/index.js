
import { createRouter,createWebHistory } from 'vue-router'


import PageHome from '@/pages/PageHome'
import PageNotFound from '@/pages/PageNotFound'

import PageLogin from '@/pages/PageLogin'

import PageHomeLog from '@/pages/PageHomeLog'



const routes = [
        {
            path: '/',
            name:  'PageHome',
            component: PageHome
        },
        {
            path: '/login',
            name:  'PageLogin',
            component: PageLogin,
        },
        {
            path: '/home',
            name:  'PageHomeLog',
            component: PageHomeLog,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'PageNotFound',
            component: PageNotFound
        }
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router