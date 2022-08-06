import {reactive} from 'vue';

export default {
  props: {
    name: String
  },
  setup(props, context) {
    const data = reactive({
      title: 'HelloJSX',
      msg: 'This is HelloJSX Component'
    });
    return () => (
      <div class="alert alert-warning">
        <h1>{data.title} [{props.name}]</h1>
        <p>{data.msg}</p>
      </div>
    );
  }
}
