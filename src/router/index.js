import { createRouter, createWebHistory } from "vue-router";

// define a routes
const routes = [
    {
        path: '/category',
        name: 'category.listCategory',
        component: () => import('@/views/category/ListCategory.vue')
    },
    {
        path: '/category/:slug',
        name: 'category.viewCategory',
        component: () => import('@/views/category/ViewCategory.vue')
    }
];

// create router
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
