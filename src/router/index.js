import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthHandler from '@/components/AuthHandler';
import UploadForm from '@/components/UploadForm';
import Gallery from '@/components/ImageGallery';
import Home from '@/components/Home';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/oauth2/callback',
        component: AuthHandler
    },
    {
        path: '/gallery',
        component: Gallery
    },
    {
        path: '/upload',
        component: UploadForm
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;