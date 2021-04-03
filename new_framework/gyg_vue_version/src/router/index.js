import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import HelloWorld from "../components/HelloWorld.vue"
import Designs from '../components/designs.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Index
    },
    {
        path: '/designs',
        name: 'Designs',
        component: Designs
    },
    {
        path: '/contact',
        name: 'Contact',
        component: HelloWorld
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router