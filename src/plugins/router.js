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
    {
        path: '/day6',
        name: 'day6',
        component: () => import('@/views/Day6.vue'),
    },
    {
        path: '/day7',
        name: 'day7',
        component: () => import('@/views/Day7.vue'),
    },
    {
        path: '/day8',
        name: 'day8',
        component: () => import('@/views/Day8.vue'),
    },
    {
        path: '/day9',
        name: 'day9',
        component: () => import('@/views/Day9.vue'),
    },
    {
        path: '/provide',
        name: 'provide',
        component: () => import('@/views/Provide.vue'),
    },
    {
        path: '/day11',
        name: 'day11',
        component: () => import('@/views/Day11.vue'),
    },
]

const router = createRouter({
    routes , 
    history : createWebHistory(),
})

export default router