const router = [
  {
    path: '/t',
    name: 'technology',
    component: () => import(/* webpackChunkName: 'technology' */ '@/views/technology/index.vue')
  },
  {
    path: '/cv',
    name: 'cv',
    component: () => import(/* webpackChunkName: 'cv' */ '@/views/cv/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: 'about' */ '@/views/about/index.vue')
  },
  {
    path: '/inspiration',
    name: 'inspiration',
    component: () => import(/* webpackChunkName: 'inspiration' */ '@/views/inspiration/index.vue')
  },
  {
    path: '/other',
    name: 'other',
    component: () => import(/* webpackChunkName: 'other' */ '@/views/other/index.vue')
  }
];

export default router;
