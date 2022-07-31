<template>
  <div>
    <div class="alert alert-primary">
      <h1>{{ title }}</h1>
      <pre>{{ message }}</pre>
    </div>
    <hr>
    <div alert alert-light>
      <h3>Inner Slot</h3>
      <ol class="list-group text-left">
        <slot />
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'Slot',
      message: 'This is message'
    }
  }
}
</script>
