<template>
  <div class="alert alert-primary">
    <h1>{{data.title}}</h1>
    <p class="mt-3 h5">{{$store.state.message}}</p>
    <hr>
    <div class="alert alert-dark"
      @click.exact="$store.commit({type: 'count', message: 'add 1!', add: 1})"
      @click.shift="$store.commit({type: 'count', message: 'add 2!', add: 2})"
      @click.ctrl="$store.commit({type: 'count', message: 'add 3!', add: 3})">
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
