export default {
  sortedPosts(state) {
    return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]));
  },
  sortedAndSearchedPosts(state, getters) {
    return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
  },
  posts(state) {
    return state.posts;
  },
  isPostsLoading(state) {
    return state.isPostsLoading;
  },
  selectedSort(state) {
    return state.selectedSort;
  },
  searchQuery(state) {
    return state.searchQuery;
  },
  page(state) {
    return state.page;
  },
  limit(state) {
    return state.limit;
  },
  totalPages(state) {
    return state.totalPages
  },
  sortOptions(state) {
    return state.sortOptions;
  }
}
