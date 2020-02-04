import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cliente from '../views/Cliente.vue'
import Clientes from '../views/Clientes.vue'
import Delete from '../views/Delete.vue'
import Update from '../views/Update.vue'
import Post from '../views/Post.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
},
{
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
},
{
    path: '/cliente',
    name: 'Cliente',
    component: Cliente
},
{
    path: '/delete',
    name: 'Delete',
    component: Delete
},
{
    path: '/update',
    name: 'Update',
    component: Update
},
{
    path: '/post',
    name: 'Post',
    component: Post
}
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router