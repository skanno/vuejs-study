<template>
  <div>
    <div class="alert alert-primary">
      <h1>{{ title }}</h1>
      <pre>{{ message }}</pre>
    </div>
    <hr>
    <div class="area"
        v-on:click.left.prevent="left"
        v-on:click.middle.prevent="middle"
        v-on:click.right.prevent="right">
        Click here!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'Event',
      message: ''
    }
  },
  methods: {
    left() {
      this.message = '[left button]';
    },
    middle() {
      this.message = '[left middle]';
    },
    right() {
      this.message = '[left right]';
    }
  }
}
</script>

<style>
.area  {
  width: 300px;
  height: 100px;
  background-color: #fff;
  padding: 10px;
  font-size: 20pt;
}
</style>
