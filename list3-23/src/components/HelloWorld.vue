<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <p ref="msg">{{ message }}</p>
    <button class="btn btn-primary" v-on:click="doAction">Click</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String
  },
  data() {
    return {
      message: 'HelloWorld',
      input: 'This is sample messgage.'
    }
  },
  mounted() {
    this.counter = 0;
  },
  methods: {
    doAction() {
      this.counter++;
      this.$refs.msg.innerHTML += '<h6>counted: ' + this.counter + '</h6>';
    }
  }
}
</script>
