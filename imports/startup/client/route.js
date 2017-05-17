// Libs
import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeteorTracker from 'vue-meteor-tracker';
import Vuetify from 'vuetify/dist/vuetify.js';
import 'vuetify/dist/vuetify.min.css';
import VeeValidate from 'vee-validate';
import 'jquery-validation';

Vue.use(VueRouter);
Vue.use(VueMeteorTracker);
Vue.use(Vuetify);
Vue.use(VeeValidate);

// Main app
import AppLayout from '/imports/ui/AppLayout.vue';
import Home from '/imports/ui/Home.vue';
import Post from '/imports/ui/Post.vue';
import PostNew from '/imports/ui/PostNew.vue';

const router = new VueRouter({
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
