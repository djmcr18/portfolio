import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/admin-auth',
      name: 'admin-auth',
      component: () => import('../views/AdminAuth.vue')
    },
    {
      path: '/blogs',
      name: 'BlogList',
      component: () => import('../views/BlogList.vue')
    },
    {
      path: '/blogs/:id',
      name: 'BlogDetail',
      component: () => import('../views/BlogDetail.vue'),
      props: true
    },
    {
      path: '/CV',
      name: 'CV',
      component: () => import('../views/CV.vue')
    }
  ],
  // Add scroll behavior here
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top on route change
    return { top: 0 }
  }
})

export default router
