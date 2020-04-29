import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './components/home.vue';
import About from './components/about.vue';
import Work from './components/work.vue';

const routes = [
    { path: '/', component: Home, props: true, name: "Home" },
    { path: '/work', component: Work, props: true, name: "Work"},
    { path: '/about', component: About, props: true, name: "About" },
];


export default routes;

Vue.use(VueRouter);

const router = new VueRouter({routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

