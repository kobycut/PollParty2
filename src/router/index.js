import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PollsView from '@/views/PollsView.vue'
import RecentsView from '@/views/RecentsView.vue'
import CreatePollView from '@/views/CreatePollView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/polls',
      name: 'polls',
      component: PollsView,
    },
    {
      path: '/recents',
      name: 'recents',
      component: RecentsView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePollView,
    }

  ],
})

export default router
