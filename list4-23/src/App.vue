<template>
  <div id="app">
    <HelloWorld title="slot" />
    <p>***this is defalut text***</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>
