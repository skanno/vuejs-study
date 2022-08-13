<template>
  <section class="alert alert-primary">
    <h1>{{data.title}}</h1>
    <p>{{data.message}}</p>
    <table class="table table-lighht table-striped">
      <thead class="text-center">
        <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
      </thead>
      <tbody class="text-left">
        <tr v-for="(data, key) in data.fire_data">
          <td>{{data.name}}</td>
          <td>{{data.age}}</td>
          <td>{{key}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { reactive, onMounted } from 'vue';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyALsuoMsnb32oPWkv8oOyDVYoqHNw2XXOA",
  authDomain: "vue3-study-5295f.firebaseapp.com",
  databaseURL: "https://vue3-study-5295f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue3-study-5295f",
  storageBucket: "vue3-study-5295f.appspot.com",
  messagingSenderId: "867136000142",
  appId: "1:867136000142:web:0634733070b3c7e83779df"
};
firebase.initializeApp(firebaseConfig);
const person = firebase.database().ref('person/');

export default {
  setup(props) {
    const data = reactive({
      title: 'Firebase',
      message: 'This is Firebase sample.',
      id: 0,
      fire_data: null
    });

    const getData = () => {
      person.once('value', (snapshot) => {
        data.fire_data = snapshot.val();
      });
    };

    onMounted(() => {
      getData();
    });

    return {data,  getData};
  }
}
</script>
