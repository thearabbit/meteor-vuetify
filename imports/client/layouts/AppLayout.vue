<template>
    <v-app id="example-2" toolbar>
        <v-navigation-drawer absolute persistent light :mini-variant.sync="mini" v-model="drawer" overflow>
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar tag="div">
                        <v-list-tile-avatar>
                            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>John Leider</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon @click.native.stop="mini = !mini">
                                <v-icon>chevron_left</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list class="pt-0" dense>
                <v-divider></v-divider>
                <template v-for="(item, index) in items">

                    <v-list-group v-if="item.children" :value="item.active">
                        <v-list-tile slot="item">
                            <v-list-tile-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-icon>keyboard_arrow_down</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-list-tile v-for="(child, childIndex) in item.children" @click="handleClick(child.route)" :key="childIndex">
                            <v-list-tile-action>
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ child.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>

                    <v-list-tile v-else :key="index" @click="handleClick(item.route)">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed class="indigo darken-4" dark>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{contentTitle}}</v-toolbar-title>
        </v-toolbar>
        <main>
            <v-container fluid>
                <v-breadcrumbs divider="/">
                    <v-breadcrumbs-item v-for="item in breadcrumbs" :key="item.text" :disabled="item.disabled">
                        {{ item.text }}
                    </v-breadcrumbs-item>
                </v-breadcrumbs>

                <!--v-router-->
                <router-view></router-view>
            </v-container>
        </main>
    </v-app>
</template>

<script>
import _ from 'lodash';

export default {
    name:'AppLayout',
    data() {
        return {
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    disabled: false
                },
                {
                    text: 'Link 1',
                    disabled: false
                },
                {
                    text: 'Link 2',
                    disabled: true
                }
            ],
            drawer: true,
            mini: false,
            right: null,
            items: [
                { title: 'Home', icon: 'dashboard', route: { name: 'home' } },
                { title: 'Post', icon: 'question_answer', route: { name: 'post' } },
                { title: 'About', icon: 'question_answer' },
                { title: 'About', icon: 'question_answer' },
                {
                    title: 'More',
                    icon: 'dashboard',
                    children: [
                        { title: 'Import', icon: 'dashboard' },
                        { title: 'Export', icon: 'dashboard' },
                        { title: 'Print', icon: 'dashboard' },
                        { title: 'Undo changes', icon: 'dashboard' },
                        { title: 'Other contacts', icon: 'dashboard' }
                    ]
                },
                {
                    title: 'Setting',
                    icon: 'dashboard',
                    children: [
                        { title: 'Import', icon: 'dashboard' },
                        { title: 'Export', icon: 'dashboard' },
                        { title: 'Print', icon: 'dashboard' },
                        { title: 'Undo changes', icon: 'dashboard' },
                        { title: 'Other contacts', icon: 'dashboard' }
                    ]
                },
            ],
        };
    },
    computed: {
        contentTitle() {
            let title = 'No Title';
            title = this.$route.meta.contentTitle ? this.$route.meta.contentTitle : (this.$route.name ? _.startCase(this.$route.name) : title);

            return title;
        },
    },
    methods: {
        handleClick(route) {
            this.$router.push(route);
        }
    }

};
</script>

<style lang="scss" scoped>
// #keep {
//     main {
//         .container {
//             height: 660px
//         }
//         .navigation-drawer__border {
//             display: none
//         }
//         .text {
//             font-weight: 400
//         }
//     }
// }
</style>
