<template>
  <div>
    <!--Form-->
    <form ref="form">
      <v-text-field v-model="name" label="Name" :counter="10" :error-messages="errors.collect('name')" v-validate="'required|max:10'" data-vv-name="name" required></v-text-field>
      <v-text-field v-model="email" label="E-mail" :error-messages="errors.collect('email')" v-validate="'required|email'" data-vv-name="email" required></v-text-field>
      <v-select v-bind:items="items" v-model="select" autocomplete label="Select" :error-messages="errors.collect('select')" v-validate="'required'" data-vv-name="select" required></v-select>
      <v-checkbox v-model="checkbox" value="1" label="Option" :error-messages="errors.collect('checkbox')" v-validate="'required'" data-vv-name="checkbox" required></v-checkbox>

      <v-menu lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width :nudge-left="40" max-width="290px">
        <v-text-field slot="activator" label="Picker in menu" v-model="datePicker" :error-messages="errors.collect('datePicker')" v-validate="'required'" data-vv-name="datePicker" readonly></v-text-field>
        <v-date-picker v-model="datePicker" :date-format="formatDate" :formatted-value.sync="formatted" no-title scrollable actions>
          <template scope="{ save, cancel }">
            <v-card-actions>
              <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
              <v-btn flat primary @click.native="save()">Save</v-btn>
            </v-card-actions>
          </template>
        </v-date-picker>
      </v-menu>

      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>

  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
import Posts from '../api/posts/posts';

export default {
  name: 'PostNew',
  $validates: true,
  data() {
    return {
      // picker
      datePicker: null,
      menu: false,
      modal: false,
      //
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: null
    }
  },
  methods: {
    formatDate(date) {
      console.log(date);
      return moment(date).format('DD/MM/YYYY');
    },
    submit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert('From Submitted!');
          return;
        }
        alert('Correct them errors!');
      });
    },
    clear() {
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.datePicker = null
      this.$validator.reset()
    }
  }
}

</script>

<style scoped>

</style>
