export default businessRole => (
  businessRole === 'SE'?
    { path: 'find', fontAwesome: 'fas fa-search', text: 'Find' }:
    { path: 'post', fontAwesome: 'fas fa-plus-circle', text: 'Post' }
);
