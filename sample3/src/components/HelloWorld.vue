<template>
  <div>
    <div>{{msg}}</div>
    <input type="text" v-model="message"><button v-on:click="alert">Click.</button>
    <div>{{message}}</div>
    <div>{{value}}</div>
    <div><input type="text" v-model="value2"></div>
    <div><input type="text" v-model="value3"></div>
    <div><button v-on:click="testEmit">Emitの動作確認</button></div>
  </div>
</template>

<script>
// 同等の実装をComposition APIで書く
export default {
  name: 'HelloWorld',
  props: {
    msg: String
    // バリデーション
  },
  components: {

  },
  data() {
    return {
      message: 'hogehoge',
      value3: ''
    }
  },
  created() {
    console.log('Call, created().');
  },
  mounted() {
    console.log('Call, mounted().');
  },
  methods: {
    alert() {
      alert(this.message);
    },
    testEmit() {
      this.$emit('testEmit', this.message);
    }
  },
  computed: {
    value() {
      return 'aaaaaaaaaa';
    },
    value2: {
      get() {
        return 'value2のget();'
      },
      set(v) {
        console.log(v);
      }
    },
  },
  watch: {
    value3(oldValue, newValue) {
      console.log(`OLD: ${oldValue}`);
      console.log(`NEW: ${newValue}`);
    }
  },
  // template: '',
}
</script>
