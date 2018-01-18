<template>
    <div>
        <v-snackbar
        :timeout="timeout"
        :top="y === 'top'"
        :bottom="y === 'bottom'"
        :right="x === 'right'"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :vertical="mode === 'vertical'"
        v-model="snackbar"
        >
        {{ text }}
        <v-btn flat class="pink--text" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
    </div>
<template>

<script>
export default {
  name: 'Message',
  props:['options'],
  data(){
      return {}
  }
}
</script>

<style lang="scss" scoped>

</style>

