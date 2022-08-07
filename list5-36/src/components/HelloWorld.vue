<template>
  <div class="alert alert-secondary">
    <h1>{{data.title}}</h1>
    <p class="mt-3 h5">{{$store.state.message}}</p>
    <hr>
    <div class="alert alert-dark" @click.exact="$store.commit('doit')">
      <a class="h5" @click.stop="$store.commit('reset')">
        clicked: {{ $store.state.counter }}
      </a>
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
