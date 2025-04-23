import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Wireframe1 from '../views/Wireframe1.vue'
import Wireframe2 from '../views/Wireframe2.vue'
import Wireframe3 from '../views/Wireframe3.vue'

const routes = [
  { path: '/', component: App },
  { path: '/wireframe-1', component: Wireframe1 },
  { path: '/wireframe-2', component: Wireframe2 },
  { path: '/wireframe-3', component: Wireframe3 },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
