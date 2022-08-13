<template>
  <section class="alert alert-primary">
    <h1>{{data.title}}</h1>
    <p>{{data.message}}</p>
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
var provider = new firebase.auth.GoogleAuthProvider();

export default {
  setup(props) {
    const data = reactive({
      title: 'Firebase',
      message: 'This is Firebase sample.',
      id: 0,
      fire_data: null
    });

    const authNow = () => {
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          data.message = result.user.displayName + ', ' + result.user.email;
        });
    };

    onMounted(() => {
      authNow();
    });

    return {data,  authNow};
  }
}
</script>
