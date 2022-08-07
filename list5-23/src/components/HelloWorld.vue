<template>
  <div class="alert alert-primary">
    <h1>{{data.title}}</h1>
    <p class="mt-3 h5">{{$store.state.message}}</p>
  </div>
</template>

<script>
import {reactive} from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    name: String
  },
  setup(props, context) {
    const data = reactive({
      title: 'Veux',
    });

    return {data};
  }
}
</script>
