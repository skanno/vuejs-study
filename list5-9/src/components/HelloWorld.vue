<template>
  <div class="alert alert-primary">
    <h1>{{title}}</h1>
    <p class="h5">{{data.msg}}</p>
  </div>
</template>

<script>
import {reactive} from 'vue';

export default {
  props: {
    title: String
  },
  setup(props, context) {
    console.log(context);

    const data = reactive({
      msg: 'This is ref-value!'
    });

    data.msg = context.attrs['msg'].toUpperCase();

    return {data};
  }
}
</script>
