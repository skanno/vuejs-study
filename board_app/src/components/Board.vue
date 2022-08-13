<template>
  <section>
    <div class="alert h6 text-right" @click="doLogin">
      [login:{{data.user != null ? data.user.displayName : '---'}}]
    </div>
    <h2>{{data.title}}</h2>
    <p class="h5">{{data.message}}</p>
    <div v-if="data.user" class="alert alert-primary">
      <div class="form-group text-left">
        <label class="h5">Message</label>
        <div class="form-row">
          <div class="col-10">
            <input v-model="data.msg" class="form-control">
          </div>
          <button @click="add" class="btn btn-primary col-2">投稿</button>
        </div>
      </div>
      <h3 class="my-3">Message</h3>
      <ul v-for="(item, key) in data.fire_data" class="list-group text-left">
        <li class="list-group-item">
          <div class="h5">{{item.msg}}</div>
          <div class="small text-right">{{item.user}} {{item.posted}}</div>
        </li>
      </ul>
    </div>
    <div v-else>
      <div class="alert alert-warning">
        ※現在、ログインされていません。
      </div>
    </div>
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
const person = firebase.database().ref('board/');
var provider = new firebase.auth.GoogleAuthProvider();

export default {
  setup(props) {
    const data = reactive({
      title: 'Board',
      message: 'ミニ伝言板。最新の投稿を表示します。',
      user: null,
      msg: '',
      num_per_page: 10,
      fire_data: {}
    });

    const login = () => {
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          data.user = result.user;
          data.message = 'ログインしました。';
          firebase.database()
            .ref('board')
            .orderByKey()
            .limitToLast(data.num_per_page)
            .on('value', (snapshot) => {
              if (firebase.auth().currentUser != null) {
                let arr = [];
                let result = snapshot.val();
                for (let item in result) {
                  arr.unshift(result[item]);
                }
                console.log(arr);
                data.fire_data = arr;
              } else {
                data.fire_data = {};
              }
            })
        });
    };

    const logout = () => {
      firebase.auth().signOut();
      data.user = null;
      data.fire_data = [];
      data.message = 'ログアウトしました。';
    };

    const doLogin = () => {
      if (firebase.auth().currentUser == null) {
        login();
      } else {
        logout();
      }
    };

    const add = () => {
      if (firebase.auth().currentUser == null) {
        alert('ログインしないと投稿できません。');
        return;
      }

      let user = firebase.auth().currentUser;
      console.log(user);
      let d = new Date();
      let dstr = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      let id = d.getTime();
      let obj = {
        msg: data.msg,
        user: user.displayName,
        posted: dstr
      };

      firebase.database().ref('board/' + id).set(obj);
      data.msg = '';
      data.message = '投稿しました。';
    };

    onMounted(() => {
      if (firebase.auth().currentUser == null) {
        login();
      }
      console.log(firebase.auth().currentUser);
    });

    return {data, login, logout, doLogin,add};
  }
}
</script>
