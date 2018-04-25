// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {fetchPosts, fetchPostsWithSaga} from '../actions';
import {getPosts, getIsFetching, getErrorMessage} from '../reducers';
import PostList from '../components/PostList';
import Error from '../components/Error';
import Loader from '../components/Loader';

type Props = {
  fetchPosts: Function,
  posts: Array<{title: string, body: string, id: number}>,
  isFetching: boolean,
  errorMessage: string,
};

class PostListContainer extends React.Component<Props> {
  // componentDidMount() {
  //   this.props.fetchPosts();
  // }

  render() {
    const {posts, isFetching, errorMessage} = this.props;

    console.log('this.props', this.props);

    if (isFetching) {
      return <Loader />;
    }

    if (errorMessage) {
      return <Error errorMessage={errorMessage} />;
    }

    return (
      <div>
        <PostList posts={posts} />
        <button onClick={() => this.props.fetchPostsWithSaga()}>
          Refetch posts
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: getPosts(state),
  isFetching: getIsFetching(state),
  errorMessage: getErrorMessage(state),
});

export default connect(mapStateToProps, {fetchPosts, fetchPostsWithSaga})(
  PostListContainer
);
