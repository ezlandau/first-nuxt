export default () => ({
  posts: [],
  isPostsLoading: false,
  selectedSort: '',
  searchQuery: '',
  page: 1,
  limit: 10,
  totalPages: 0,
  sortOptions: [
    {value: 'title', name: 'By name'},
    {value: 'body', name: 'By description'},
  ]
});
