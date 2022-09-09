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
}
