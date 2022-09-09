<template>
  <div v-if="posts.length > 0">
    <post-form>

    </post-form>
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: red">
    List of posts is empty
  </h2>
</template>

<script>
import PostItem from "@/components/PostItem";
import PostForm from "./PostForm.vue";
export default {
  components: { PostItem, PostForm },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
