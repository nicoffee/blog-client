import PostList from './containers/PostList';
import SearchedPostList from './containers/SearchedPostList';
import Post from './containers/Post';
import PostEdit from './containers/PostEdit';
import PostCreate from './containers/PostCreate';
import {fetchPostsRequest, fetchPostsSaga} from './modules/posts';

const routes = [
  {
    path: '/',
    exact: true,
    component: PostList,
    // saga: fetchPostsSaga,
    // action: {payload: {limit: 10, offset: 0}},
    loadData: {
      saga: fetchPostsSaga,
      action: {payload: {limit: 10, offset: 0}},
    },
  },
  {
    path: '/search',
    component: SearchedPostList,
  },
  {
    path: '/post/:postId',
    component: Post,
    // loadData: (store, match) => {
    //   store.dispatch(fetchPostRequest(match.postId));
    // },
    // saga: fetchPostsSaga,
    // action: {payload: {limit: 10, offset: 0}},
  },
  {
    path: '/post/:postId/edit',
    component: PostEdit,
  },
  {
    path: '/new',
    component: PostCreate,
  },
];

export default routes;
