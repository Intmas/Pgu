<template>
  <v-main>
    <v-btn @click="getPosts">Get posts</v-btn>
    <ul>
      <li v-for="post in posts" :key="post.id" data-test="post">
        {{ post.title }}
      </li>
    </ul>
  </v-main>
</template>

<script>

import request from '../services/RequestServiceMock.js'
export default {
  data() {
    return {
      posts: null
    }
  },
  methods: {
    getPosts() {
      request.getSearchData("адми")
        .then(response => {
          console.log(response.data);
        })
        .catch(e => console.warn('CATCH:',e.name, e.message))
        .finally(()=> console.log('request done'));
    },
    getPosts1() {
      request.getTestJson()
          .then(response => {
            console.log(response.data);
          })
          .catch(e => console.warn('CATCH:',e.name, e.message));
    }
  }
}
</script>

<style>
.top-container{
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #3e73f2;
}

</style>
