<template>
  <div id="app">
    <HelloWorld title="computed" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'validate',
      num: 1230
    }
  }
}
</script>
