// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {getPosts, getIsFetching, getErrorMessage} from '../modules/posts';
import PostList from '../components/PostList';
import Error from '../components/Error';
import Loader from '../ui/Loader';

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
  posts: Array<post>,
  isFetching: boolean,
  errorMessage: string,
};

class PostListContainer extends React.PureComponent<Props> {
  render() {
    const {posts, isFetching, errorMessage} = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (errorMessage) {
      return <Error errorMessage={errorMessage} />;
    }

    if (!posts.length) {
      return <Error errorMessage="No posts found" />;
    }

    return (
      <div>
        <PostList posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: getPosts(state),
  isFetching: getIsFetching(state),
  errorMessage: getErrorMessage(state),
});

export default connect(mapStateToProps)(PostListContainer);
