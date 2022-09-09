export default {
  async fetchPosts({state, commit}) {
    try {
      commit('setLoading', true);
      const response = await this.$axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: state.page,
          _limit: state.limit
        }
      });
      commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
      commit('setPosts', response.data)
    } catch (e) {
      console.log(e)
    } finally {
      commit('setLoading', false);
    }
  },
  async loadMorePosts({state, commit}) {
    try {
      commit('setPage', state.page + 1)
      const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: state.page,
          _limit: state.limit
        }
      });
      commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
      commit('setPosts', [...state.posts, ...response.data]);
    } catch (e) {
      console.log(e)
    }
  }
}
