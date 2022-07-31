<template>
  <div>
    <div class="alert alert-primary">
      <h1>{{ title }}</h1>
      <pre>{{ message }}</pre>
    </div>
    <hr>
    <div alert alert-light>
      <h3>Inner Slot</h3>
      <slot />
      <ul class="list-group">
        <li class="list-group-item">
          <slot name="first" />
        </li>
        <li class="list-group-item">
          <slot name="second" />
        </li>
        <li class="list-group-item">
          <slot name="third" />
        </li>
      </ul>
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
