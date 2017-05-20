import Vue from 'vue'

import Router from 'vue-router'
import Error from '../components/404.vue'
import Home from '../components/Index.vue'
import Category from '../components/Category.vue'
import Cart from '../components/Cart.vue'
import My from '../components/My.vue'
import List from '../components/List.vue'
import Detail from '../components/Detail.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',//HTML5 History 模式
    base: '/',
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/home', name: 'Home', component: Home },
        { path: '/category', name: 'Category', component: Category },
        { path: '/list/:id', name: 'List', component: List },
        { path: '/detail/:id', name: 'Detail', component: Detail },
        { path: '/cart', name: 'Cart', component: Cart },
        { path: '/my', name: 'My', component: My },
        { path: '/login', name: 'Login', component: Login },
        { path: '/register', name: 'Register', component: Register },
        { path: '/404', name: 'Error', component: Error },
        { path: "*", redirect: '/404' }
    ]
})
