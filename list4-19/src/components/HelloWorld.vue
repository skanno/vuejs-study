<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <pre v-on:click="clear">{{ message }}</pre>
  </div>
  <hr>
  <div>
    <input type="text" v-on:keydown="type" class="form-control">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'Event',
      message: ''
    }
  },
  methods: {
    type(event) {
      this.message += event.key + ' ';
      if (event.key == 'Escape') {
        this.message = '';
      }
      event.target.value = '';
    },
    clear() {
      this.message = '';
    }
  }
}
</script>
