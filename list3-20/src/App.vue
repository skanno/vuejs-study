<template>
  <div id="app">
    <HelloWorld v-bind:title="message" />
  </div>
  <hr>
  <button class="btn btn-primary" v-on:click="doAction">canhge title</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'HELLO'
    }
  },
  methods: {
    doAction() {
      var input = prompt('nw title:');
      this.message = input;
    }
  }
}
</script>
