import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login'
import Protocolo from '../components/form/Protocolo'
import Assunto from '../components/form/Assunto'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path : '/login' , 
    name: 'Login',
    component : Login
  },
  { path : '/protocolo' , 
    name: 'Protocolo',
    component : Protocolo
  },
  { path : '/assunto' , 
    name: 'Assunto',
    component : Assunto
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
