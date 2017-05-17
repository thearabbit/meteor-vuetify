<template>
    <div>
        <h2 class="section-header secondary--text primary--after display-2">
            Post New
        </h2>

        <!--Form-->
        <form @submit.prevent="validateForm">
            <v-row row>
                <v-col xs12>
                    <v-text-field
                            v-model="form.title"
                            name="title"
                            label="Title"
                            hint="At least 100 characters"
                            append-icon="remove_red_eye"
                            v-bind:rules="rules.title"
                            v-validate="'required'"
                    ></v-text-field>
                </v-col>
                <v-col xs12>
                    <v-text-field
                            v-model="form.body"
                            name="body"
                            label="Body"
                            append-icon="remove_red_eye"
                            v-bind:rules="rules.body"
                            v-validate="'required'"
                    ></v-text-field>
                </v-col>
                <v-col xs12>
                    <v-dialog
                            persistent
                            v-model="modal"
                            lazy
                    >
                        <v-text-field
                                slot="activator"
                                v-model="form.publishedDate"
                                name="publishedDate"
                                label="Published Date"
                                append-icon="remove_red_eye"
                                v-bind:rules="rules.publishedDate"
                                v-validate="'required'"
                                readonly
                        ></v-text-field>
                        <v-date-picker v-model="form.publishedDate" scrollable></v-date-picker>
                    </v-dialog>
                </v-col>

                <v-btn primary type="submit">Submit</v-btn>

            </v-row>
        </form>

    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        name: 'PostNew',
        data(){
            return {
                form: {
                    title: '',
                    body: '',
                    publishedDate: '',
                },
                rules: {
                    title: [],
                    body: [],
                    publishedDate: [],
                },
            }
        },
        watch: {
            errors: {
                handler: function (val, oldVal) {
                    console.log('watcher');
                    _.forEach(this.rules, (val, key) => {
                        this.rules[key] = [() => this.errors.has(key) ? this.errors.first(key) : true];
                    });
                },
                deep: true
            }
        },
        methods: {
            validateForm(){
                this.$validator.validateAll().then(() => {
                    console.log('data', this.form);
                }).catch((err) => {
                    console.log(err.reason);
                });
            },
        }
    }

</script>

<style scoped>
</style>
