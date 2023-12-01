import { createRouter  , createWebHistory} from 'vue-router'

const routes = [
    {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    },
    {
        path: '/day3',
        name: 'day3',
        component: () => import('@/views/Day3.vue'),
    },
]

const router = createRouter({
    routes , 
    history : createWebHistory(),
})

export default router