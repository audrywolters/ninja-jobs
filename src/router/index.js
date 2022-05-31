import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import JobList from '../views/jobList/JobListView.vue'
import JobDetail from '../views/jobList/JobDetailView.vue'
import NotFound from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/jobList',
    name: 'jobList',
    component: JobList
  },
  {
    path: '/jobList/:id',
    name: 'JobDetail',
    component: JobDetail,
    props: true
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobList'
  },
  // catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
