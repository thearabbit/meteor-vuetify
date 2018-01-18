<template>
    <div>
        <v-card>
            <v-btn primary dark @click.native="addNew">Add New</v-btn>

            <!--Data table-->
            <v-card-title>
                <v-spacer></v-spacer>
                <v-text-field append-icon="search" label="Search" single-line hide-details v-model="itemsSearch"></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="items" :search="itemsSearch" :rows-per-page-items="[5, 10, 20, { text: 'All', value: -1 }]">
                <template slot="items" scope="props">
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.gender }}</td>
                </template>
            </v-data-table>
        </v-card>

    </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'Post',
    data() {
        return {
            items: [
                { "name": "Rabbit", "gender": "M" },
                { "name": "Kevin", "gender": "M" },
                { "name": "Narong", "gender": "M" },
                { "name": "Phirum", "gender": "M" },
                { "name": "Chanra", "gender": "F" },
                { "name": "Sour", "gender": "F" },
                { "name": "Yiman", "gender": "F" },
                { "name": "Veasna", "gender": "F" },
                { "name": "Phalkun", "gender": "F" },
                { "name": "Smey", "gender": "F" },
                { "name": "Samphos", "gender": "F" },
            ],
            headers: [
                { text: 'Name', value: 'name', left: true },
                { text: 'Gender', value: 'gender', left: true }
            ],
            itemsSearch: "",
        }
    },
    methods: {
        addNew() {
            this.$router.push({ path: '/post-new' });
        },
    }
}

</script>

<style scoped>

</style>
