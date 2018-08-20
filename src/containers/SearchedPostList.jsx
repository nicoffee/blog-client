// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {
  fetchPostsRequest,
  getSearchedPosts,
  getIsSearchedFetching,
  getErrorMessage,
} from '../modules/posts';
import PostList from '../components/PostList';
import Error from '../components/Error';
import Loader from '../components/Loader';

export type post = {
  _id: string,
  title: string,
  body: string,
  picture: string,
  published: string,
  author: {
    name: string,
  },
};

type Props = {
  fetchPostsRequest: Function,
  posts: Array<post>,
  isFetching: boolean,
  errorMessage: string,
};

class PostListContainer extends React.Component<Props> {
  render() {
    const {posts, isFetching, errorMessage, fetchPostsRequest} = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (errorMessage) {
      return <Error errorMessage={errorMessage} request={fetchPostsRequest} />;
    }

    if (!posts.length) {
      return (
        <Error errorMessage="No posts found yet" request={fetchPostsRequest} />
      );
    }

    return (
      <div>
        <PostList posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: getSearchedPosts(state),
  isFetching: getIsSearchedFetching(state),
  errorMessage: getErrorMessage(state),
});

export default connect(mapStateToProps, {
  fetchPostsRequest,
})(PostListContainer);
