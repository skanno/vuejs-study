<template>
  <div class="alert alert-primary">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
  <hr>
  <p>Number: {{ num }}</p>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    titme: String,
    num: Number
  },
  data() {
    return {
      message: 'バリデーション・チェック'
    }
  }
}
</script>
