<template>
  <div>
    <h1>Composition APIを使わない実装</h1>
    <HelloWorld msg="App.vueから値を設定" v-on:testEmit='doAction' />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    doAction(message) {
      alert(message);
    }
  }
}
</script>
