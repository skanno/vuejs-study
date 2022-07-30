<template>
  <div id="app">
    <HelloJSX title="OK, Vue3" msg="※属性で設定したメッセージ。" />
  </div>
</template>

<script>
import HelloJSX from './components/HelloJSX.jsx'

export default {
  name: 'app',
  components: {
    HelloJSX
  }
}
</script>
