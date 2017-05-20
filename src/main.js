import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueLazyLoad from 'vue-lazyload'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
//mini-ui
Vue.use(Mint);

//懒加载的默认图片
//import def_lazy_img from './assets/images/loading.svg'

//使用懒加载组件
//Vue.use(VueLazyLoad,{
    //loading: def_lazy_img
//})

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
