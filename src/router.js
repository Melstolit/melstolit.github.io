import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main'
import Chart from './views/Chart'
import About from './views/About'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Main
        },
        {
            path: '/Chart',
            name: 'chart',
            component: Chart
        },
        {
            path: '/About',
            name: 'about',
            component: About
        }
    ]
})