<template>
  <div id="app">
    <HelloWorld v-bind:title="message" v-on:result-event="doAction"/>
  </div>
  <hr>
  <p>{{message}}</p>
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
    doAction(message) {
      this.message = '(*** you send:"' + message + '". ***)';
    }
  }
}
</script>
