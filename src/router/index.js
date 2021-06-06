import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [{
        path: '/',
        name: 'accueil',
        component: Home
    },
    {
        path: '/about',
        name: 'a_propos',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/articles/:path',
        name: 'articles',
        component: () =>
            import ('../views/Articles.vue')
    }, {
        path: '/articles',
        name: 'articlesListe',
        component: () =>
            import ('../views/ArticlesListe.vue')
    }, {
        path: '/photos',
        name: 'photos',
        component: () =>
            import ('../views/Photos.vue')
    }, {
        path: '/cartes',
        name: 'cartes',
        component: () =>
            import ('../views/About.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;