import { createRouter, createWebHistory } from 'vue-router';
import Notes from '@/views/Notes.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/note',
      component: Notes,
    }
    ,
    {
      path: '/lore',
      component: Notes,
    }
  ],
});

export default router;