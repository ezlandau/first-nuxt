export default {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setLoading(state, bool) {
    state.isPostsLoading = bool
  },
  setPage(state, page) {
    state.page = page
  },
  setSelectedSort(state, selectedSort) {
    state.selectedSort = selectedSort
  },
  setTotalPages(state, totalPages) {
    state.totalPages = totalPages
  },
  setSearchQuery(state, searchQuery) {
    state.searchQuery = searchQuery
  },
  setDialogVisible(state, dialogVisible) {
    state.dialogVisible = dialogVisible;
  },
  UPDATE_POST(state, payload) {
    const { id, name, description } = payload;
    const post = state.posts.find(p => p.id === id)
    post.name = name;
    post.description = description;
  },
  DELETE_POST(state, post){
    var index = state.posts.findIndex(p => p.id === post.id);
    state.posts.splice(index, 1);
  }
}
