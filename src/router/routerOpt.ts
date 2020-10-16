const router = [
  {
    path: '/note',
    name: 'note',
    component: () => import(/* webpackChunkName: 'notes' */ '@/views/note/Index.vue')
  },
  {
    path: '/cv',
    name: 'cv',
    component: () => import(/* webpackChunkName: 'cv' */ '@/views/cv/Index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: 'about' */ '@/views/about/Index.vue')
  },
  {
    path: '/inspiration',
    name: 'inspiration',
    component: () => import(/* webpackChunkName: 'inspiration' */ '@/views/inspiration/Index.vue')
  },
  {
    path: '/other',
    name: 'other',
    component: () => import(/* webpackChunkName: 'other' */ '@/views/other/Index.vue')
  }
];

export default router;
