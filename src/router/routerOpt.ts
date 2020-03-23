const router = [
    {
        path: '/inspiration',
        name: 'inspiration',
        component: () => import(/* webpackChunkName: 'inspiration' */ '../views/inspiration/index.vue')
    }
];

export default router;
