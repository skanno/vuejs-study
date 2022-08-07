<template>
  <div class="alert alert-primary">
    <h1>{{data.title}}</h1>
    <p class="mt-3 h5">{{$store.state.message}}</p>
    <hr>
    <div class="btn btn-secondary" @click.exact="$store.commit('count')" @click.ctrl="$store.commit('reset')">
      clicked: {{ $store.state.counter }}
    </div>
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
