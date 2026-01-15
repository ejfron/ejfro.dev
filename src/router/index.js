import { createRouter, createWebHistory } from 'vue-router'
import ProfileContact from '@/components/ContactCom.vue' 
import Resume from '@/components/ResumeCom.vue' 
import Home from '@/components/HomeCom.vue' 
import Project from '@/components/ProjectCom.vue'

const routes = [
  {
    path: '/',
    name: 'HomeAbout',
    component: Home,
    meta: { scrollTo: '#home' }
  },
  {
    path: '/resume', 
    name: 'Resume',
    component: Resume,
    meta: { scrollTo: '#resume' }
  },
  {
    path: '/works',
    name: 'Projects',
    component: Project,
    meta: { scrollTo: '#works' }
  },
  {
    path: '/contact',
    name: 'ProfileContact',
    component: ProfileContact,
    meta: { scrollTo: '#contact' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition
    }
    
   
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 
      }
    }
    

    if (to.meta.scrollTo) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.meta.scrollTo)
          if (element) {
            resolve({
              el: to.meta.scrollTo,
              behavior: 'smooth',
              top: 80 
            })
          } else {
            resolve({ left: 0, top: 0 })
          }
        }, 300) 
      })
    }

    return { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {

  document.body.classList.add('route-transition')
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    document.body.classList.remove('route-transition')
  }, 300)
})

export default router
