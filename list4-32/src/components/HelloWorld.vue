<template>
  <div>
    <div class="alert alert-primary">
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <button class="btn btn-primary m-3" v-on:click="doAction">
        {{btn}}
      </button>
      <transition name="transit">
        <p v-if="flg" class="alert alert-light h5 trans">
          Transition context!!
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'Trans&anim',
      message: 'This is Transition sample!',
      flg: true,
      btn: 'Hide'
    }
  },
  methods: {
    doAction() {
      this.flg = !this.flg;
    },
    startAction() {
      if (this.flg) {
        this.message = '現れます・・・・';
      } else {
        this.message = '消えます・・・・';
      }
    },
    endAction() {
      if (this.flg) {
        this.btn = 'Hide';
        this.message = '現れました。';
      } else {
        this.btn = 'Show';
        this.message = '消えました。';
      }
    }
  }
}
</script>

<style>
.trans {
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 20px;
}

.transit-enter-active {
  transition: 1.0s;
}

.transit-leave-active {
  transition: 1.0s;
  opacity :0.5;
}
</style>