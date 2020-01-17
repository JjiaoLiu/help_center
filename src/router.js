import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/list/:type',
            component: () => import('./views/List.vue'),
            children: []
        },
        {
            path: '/listId/:id',
            component: () => import('./views/ListId.vue'),
        }
    ]
})
