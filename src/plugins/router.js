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
    {
        path: '/day4',
        name: 'day4',
        component: () => import('@/views/Day4.vue'),
    },
    {
        path: '/day5',
        name: 'day5',
        component: () => import('@/views/Day5.vue'),
    },
    {
        path: '/event',
        name: 'event',
        component: () => import('@/views/Eventhandling.vue'),
    },
    {
        path: '/form',
        name: 'form',
        component: () => import('@/views/Form.vue'),
    },
    {
        path: '/modify',
        name: 'modify',
        component: () => import('@/views/Modifier.vue'),
    },
]

const router = createRouter({
    routes , 
    history : createWebHistory(),
})

export default router