<template>
  <section class="alert alert-primary">
    <h1>{{data.title}}</h1>
    <p>{{data.message}}</p>
    <div class="text-left">
      <div class="form-group">
        <label>Email</label>
        <input type="text" v-model="data.email" class="form-control">
      </div>
    </div>
    <button @click="delData" class="btn btn-primary my-3">Click</button>
    <ul v-for="(item, key) in data.fire_data" class="list-group">
      <li class="list-group-item text-left">
        <strong>{{key}}</strong><br>{{item}}
      </li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios';
import { reactive, onMounted } from 'vue';

let url = 'https://vue3-study-5295f-default-rtdb.asia-southeast1.firebasedatabase.app/person';

export default {
  setup(props) {
    const data = reactive({
      title: 'Firebase',
      message: 'This is Firebase sample.',
      email: '',
      username: '',
      tal: '',
      age: 0,
      fire_data: {}
    });

    const delData = () => {
      if (data.email == '') {
        console.log('no-email!');
        return;
      }
      let del_url = url + '/' + data.email + '.json';
      axios.delete(del_url).then(() => {
        data.message = data.email + 'を削除しました。';
        data.email = '';
        getData();
      });
    };

    const getData = () => {
      let all_url = url + '.json';
      axios.get(all_url).then((result) => {
        data.message = 'get all data.';
        data.fire_data = result.data;
      }).catch((error) => {
        data.message = 'ERROR!';
        data.fire_data = {};
      });
    };

    onMounted(() => {
      getData();
    });

    return {data, delData, getData};
  }
}
</script>
