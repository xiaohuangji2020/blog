const router = [
    {
        path: '/t',
        name: 'technology',
        component: () => import(/* webpackChunkName: 'inspiration' */ '../views/technology/index.vue')
    },
    {
        path: '/cv',
        name: 'cv',
        component: () => import(/* webpackChunkName: 'inspiration' */ '../views/cv/index.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: 'inspiration' */ '../views/about/index.vue')
    },
    {
        path: '/inspiration',
        name: 'inspiration',
        component: () => import(/* webpackChunkName: 'inspiration' */ '../views/inspiration/index.vue')
    },
    {
        path: '/other',
        name: 'other',
        component: () => import(/* webpackChunkName: 'inspiration' */ '../views/other/index.vue')
    }
];

export default router;
