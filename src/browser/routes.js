import App from '../containers/App';
import PostList from '../containers/PostList';
import SearchedPostList from '../containers/SearchedPostList';
import Post from '../containers/Post';
import PostEdit from '../containers/PostEdit';
import PostCreate from '../containers/PostCreate';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: PostList,
      },
      {
        path: '/search',
        component: SearchedPostList,
      },
      {
        path: '/post/:postId',
        component: Post,
      },
      {
        path: '/post/:postId/edit',
        component: PostEdit,
      },
      {
        path: '/new',
        component: PostCreate,
      },
    ],
  },
];

export default routes;
