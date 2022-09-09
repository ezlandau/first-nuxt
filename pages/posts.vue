<template>
  <div>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
              'current-page': page === pageNumber
            }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "~/components/PostForm";
import PostList from "~/components/PostList";
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  components: {
    PostList,
    PostForm
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: 'posts/setPage',
      setSearchQuery: 'posts/setSearchQuery',
      setSelectedSort: 'posts/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'posts/loadMorePosts',
      fetchPosts: 'posts/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapGetters({
      sortedPosts: 'posts/sortedPosts',
      sortedAndSearchedPosts: 'posts/sortedAndSearchedPosts',
      posts: 'posts/posts',
      isPostsLoading: 'posts/isPostsLoading',
      selectedSort: 'posts/selectedSort',
      searchQuery: 'posts/searchQuery',
      page: 'posts/page',
      limit: 'posts/limit',
      totalPages: 'posts/totalPages',
      sortOptions: 'posts/sortOptions'
    })
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  }
}
</script>

<style>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
.observer {
  height: 30px;
  background: green;
}
</style>
