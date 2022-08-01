<script>
import {h} from 'vue';

export default {
  props: {
    title: String,
    msg: String
  },
  setup(props) {
    return () => h(
      'div',
      {class: 'alert alert-primary'},
      [
        h('h1', props.title),
        h('p', props.msg)
      ]);
  }
}
</script>
