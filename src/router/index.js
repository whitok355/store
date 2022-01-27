import {createRouter, createWebHistory} from 'vue-router';
import home from '../components/home/home.vue'

const routes = [
    {
        path: '/store/',
        name: 'home',
        component: home
    },
    {
        path: '/catalog/',
        name: 'catalog',
        component: () => import('../components/catalog/catalog.vue'),
    },
    {
        path: '/login/',
        name: 'login',
        component: () => import('../components/login/login.vue'),
    },
    {
        path: '/cart/',
        name: 'cart',
        component: () => import('../components/cart/cart.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.Base_url),
    routes,
})

export default router