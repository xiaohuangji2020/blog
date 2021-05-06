const router = [
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
  },
  {
    path: '/demo/:name',
    name: 'demo',
    component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/Index.vue')
  },
  {
    path: '/note',
    name: 'note',
    component: () => import(/* webpackChunkName: 'notes' */ '@/views/note/Index.vue'),
    children: [
      {
        path: '/note/vuenote/vforkey',
        name: 'vforkey',
        component: () => import(/* webpackChunkName: 'vuenote' */ '@/views/note/vuenote/VForKey.vue')
      },
      {
        path: '/note/content/codingbetter',
        name: 'codingbetter',
        component: () => import(/* webpackChunkName: 'codingbetter' */ '@/views/note/content/CodingBetter.vue')
      }
    ]
  }
];

export default router;
