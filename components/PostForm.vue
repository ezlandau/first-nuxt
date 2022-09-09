<template>
  <form @submit.prevent>
    <h4>Create the post</h4>
    <b-input
      v-focus
      v-model="post.title"
      type="text"
      placeholder="Name"
    />
    <b-input
      v-model="post.body"
      type="text"
      placeholder="Description"
    />
    <b-button
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
    >
      Create
    </b-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
