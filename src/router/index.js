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
      component: () => import('../Modules/Counter/components/Counter.vue'),
    },
    {
      path: '/ToDoList',
      name: 'ToDoList',
      component: () => import('../Modules/ToDoList/components/ToDoList.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../Modules/register/views/registerView.vue'),
    }
  ]
})

export default router
