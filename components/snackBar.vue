<template>
  <v-snackbar
    v-model="snackbar"
    :top="true"
    :color="'error'"
    :timeout="5000"
  >
    {{ snackbarMessage }}
    <v-btn
      dark
      text
      @click="snackbar = false"
      title="close"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'snackBar',
  data: () => ({
    snackbar: false
  }),
  props: {
    snackbarMessage: {
      required: true
    }
  },
  watch: {
    snackbarMessage (val) {
      if (val.length > 1) {
        this.snackbar = true
      }
    },
    snackbar (newVal) {
      if (newVal === false) {
        this.$emit('update:snackbarMessage', '')
      }
    }
  }
}
</script>