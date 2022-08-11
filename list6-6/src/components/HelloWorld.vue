<template>
  <section class="alert alert-primary">
    <h1>{{data.title}}</h1>
    <p>{{data.message}}</p>
    <table class="table table-light table-striped">
      <thead class="table-dark test-center">
        <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
      </thead>
      <tbody class="text-left">
        <tr v-for="(item, key) in data.fire_data">
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{key}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import axios from 'axios';
import { reactive, onMounted } from 'vue';

let url = 'https://vue3-study-5295f-default-rtdb.asia-southeast1.firebasedatabase.app/person.json';

export default {
  setup(props) {
    const data = reactive({
      title: 'Firebase',
      message: 'This is Firebase sample.',
      fire_data: null
    });

    const getData = () => {
      axios.get(url).then((result) => {
        data.fire_data = result.data;
        console.log(data.fire_data);
      }).catch((error) => {
        data.message = 'Error';
        data.fire_data = null;
      });
    };

    onMounted(() => {
      getData();
    });

    return {data};
  }
}
</script>
