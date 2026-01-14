import { createRouter, createWebHistory } from 'vue-router'
import ProfileContact from '@/components/ContactCom.vue' 
import Resume from '@/components/ResumeCom.vue' 
import Home from '@/components/HomeCom.vue' 
import Project from '@/components/ProjectCom.vue'

const routes = [
  {
    path: '/',
    name: 'HomeAbout',
    component: Home
  },
  {
    path: '/resume', 
    name: 'Resume',
    component: Resume
  },
  {
    path: '/works',
    name: 'Projects',
    component: Project
  },
  {
    path: '/contact',
    name: 'ProfileContact',
    component: ProfileContact
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router