<template>
  <form @submit.prevent>
    <h4>Create the post</h4>
    <b-input
      v-focus
      v-model="postCreate.title"
      type="text"
      placeholder="Name"
    />
    <b-input
      v-model="postCreate.body"
      type="text"
      placeholder="Description"
    />
    <b-button
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost(postCreate)"
    >
      Create
    </b-button>

    <h4>Update the description by name</h4>
    <b-input
      v-focus
      v-model="postUpdate.title"
      type="text"
      placeholder="Name"
    />
    <b-input
      v-model="postUpdate.body"
      type="text"
      placeholder="Description"
    />
    <b-button
      style="align-self: flex-end; margin-top: 15px"
      @click="updatePost(postUpdate)"
    >
      Update
    </b-button>
  </form>


</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      postCreate: {
        title: '',
        body: ''
      },
      postUpdate: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    ...mapActions({
      createPost: 'posts/createPost',
      updatePost: 'posts/updatePost'
    }),
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
