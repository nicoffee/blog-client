// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import PostList from '../components/PostList';
import Loader from '../components/Loader';
import {getPosts} from '../reducers';

type Props = {
  fetchPosts: Function,
  posts: Array<{title: string, body: string, id: number}>,
};

class PostListContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const {posts, isFetching} = this.props;

    if (isFetching) {
      return <Loader />;
    }

    return <PostList posts={posts} />;
  }
}

const mapStateToProps = state => ({
  posts: getPosts(state),
  isFetching: state.posts.isFetching,
});

export default connect(mapStateToProps, {fetchPosts})(PostListContainer);
