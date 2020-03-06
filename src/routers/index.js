import Vue from 'vue'
import Router from 'vue-router'
import MotoRoute from './modules/MotoRoute'

Vue.use(Router)

const modules = [
    ...MotoRoute
]

export default new Router({
    mode: 'history',
    routes: [{
            path: '*',
            redirect: '/'
        },
        ...modules
    ]
})