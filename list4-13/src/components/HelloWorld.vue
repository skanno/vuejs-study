<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
  <hr>
  <P class="h5">{{val}}</P>
  <div class="form-group text-left">
    <label>* 2:</label>
    <input type="number" v-model="a" class="form-control">
  </div>
  <div class="form-group text-left">
    <label>^ 2:</label>
    <input type="number" v-model="b" class="form-control">
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String
  },
  data() {
    return {
      message: '算術プロパティの利用',
      val: 0
    }
  },
  computed: {
    a: {
      get() {
        return this.val * 2;
      },
      set(val) {
        this.val = Math.floor(val / 2);
      }
    },
    b: {
      get() {
        return this.val * this.val;
      },
      set(val) {
        this.val = Math.floor(Math.sqrt(val));
      }
    }
  },
  mounted() {
    this.val = 10;
  }
}
</script>
