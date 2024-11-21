import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/Counter',
      name: 'Counter',
      component: () => import('../components/Counter.vue'),
    },
    {
      path: '/ToDoList',
      name: 'ToDoList',
      component: () => import('../components/ToDoList.vue')
    }
  ]
})

export default router
