<template>
<div class="post">
<div>
  <div>{{ post.id }}</div>
  <div><strong>Name:</strong> {{ post.title }}</div>
  <div><strong>Description:</strong> {{ post.body }}</div>
</div>
<div class="post__btns">
  <b-button
    @click="$router.push(`/parent/${post.id}`)"
  >
    Open
  </b-button>
  <b-button
    @click="updatePost(post, post)"
  >
    Update
  </b-button>
  <b-button
    @click="deletePost(post, post)"
  >
    Delete
  </b-button>
</div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapActions({
      updatePost: 'posts/updatePost',
      deletePost: 'posts/deletePost'
    }),
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
}
</style>
