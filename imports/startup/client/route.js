// Libs
import { Meteor } from 'meteor/meteor';
import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker);

import Vuetify from 'vuetify/dist/vuetify.js';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

// Main app
import AppLayout from '../../client/layouts/AppLayout.vue';
import Home from '../../client/Home.vue';
import Post from '../../client/Post.vue';
import PostNew from '../../client/PostNew.vue';

const router = new VueRouter({
    mode: 'history',    
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                contentTitle: 'Home'
            }
        },
        {
            path: '/post',
            name: 'post',
            component: Post,
            meta: {
                contentTitle: 'Post'
            }
        },
        {
            path: '/post-new',
            name: 'postNew',
            component: PostNew,
            meta: {
                contentTitle: 'Post New'
            }
        },
    ]
});

Meteor.startup(() => {
    new Vue({
        router,
        render: h => h(AppLayout),
    }).$mount('app');
});
