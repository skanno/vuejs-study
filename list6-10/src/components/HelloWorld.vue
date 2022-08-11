<template>
  <section class="alert alert-primary">
    <h1>{{data.title}}</h1>
    <p>{{data.message}}</p>
    <div class="form-inline my-2">
      <input type="text" v-model="data.find" class="form-control">
      <button @click="getData" class="btn btn-primary">Click</button>
    </div>
    <div class="alert alert-light">
      {{data.fire_data}}
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { reactive, onMounted } from 'vue';

let url = 'https://vue3-study-5295f-default-rtdb.asia-southeast1.firebasedatabase.app/person.json?orderBy=%22$key%22&equalTo=%22';

export default {
  setup(props) {
    const data = reactive({
      title: 'Firebase',
      message: 'This is Firebase sample.',
      find: '',
      fire_data: {}
    });

    const getData = () => {
      console.log(data.find !== '');

      if (data.find !== '') {
        axios.get(url + data.find + '%22').then((result) => {
          data.fire_data = result.data;
        }).catch((error) => {
          data.message = 'Error';
          data.fire_data = {};
        });
      } else {
        data.fire_data = 'no data found...';
      }
    };

    onMounted(() => {
      getData();
    });

    return {data, getData};
  }
}
</script>
