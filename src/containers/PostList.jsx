// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {fetchPostsRequest} from '../actions';
import {getPosts, getIsFetching, getErrorMessage} from '../reducers/posts';
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
  componentDidMount() {
    this.props.fetchPostsRequest();
  }

  render() {
    const {posts, isFetching, errorMessage} = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (errorMessage) {
      return <Error errorMessage={errorMessage} />;
    }

    return <PostList posts={posts} />;
  }
}

const mapStateToProps = state => ({
  posts: getPosts(state),
  isFetching: getIsFetching(state),
  errorMessage: getErrorMessage(state),
});

export default connect(mapStateToProps, {fetchPostsRequest})(PostListContainer);
