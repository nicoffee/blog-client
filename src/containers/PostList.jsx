// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  fetchPostsRequest,
  getPosts,
  getIsFetching,
  getErrorMessage,
} from '../modules/posts';
import PostList from '../components/PostList';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Button from '../components/Button';

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

const StyledDiv = styled.div`
  width: 100%;
`;

class PostListContainer extends React.Component<Props> {
  componentDidMount() {
    if (!this.props.posts.length) {
      this.props.fetchPostsRequest({limit: 10, offset: 0});
    }
    // window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const offset = document.documentElement.scrollTop + window.innerHeight;
    const height = document.documentElement.offsetHeight;

    if (offset === height) {
      this.props.fetchPostsRequest({
        limit: 10,
        offset: this.props.posts.length,
      });
    }
  };

  fetchMore = () => {
    this.props.fetchPostsRequest({
      limit: 10,
      offset: this.props.posts.length,
    });
  };

  render() {
    const {posts, isFetching, errorMessage, fetchPostsRequest} = this.props;

    if (!posts.length && isFetching) {
      return <Loader />;
    }

    if (!posts.length) {
      return (
        <Error
          errorMessage="No published posts yet"
          request={fetchPostsRequest}
        />
      );
    }

    if (errorMessage) {
      return <Error errorMessage={errorMessage} request={fetchPostsRequest} />;
    }

    return (
      <StyledDiv>
        <PostList posts={posts} />
        {isFetching ? (
          <Loader />
        ) : (
          <Button onClick={this.fetchMore}>Load more</Button>
        )}
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => ({
  posts: getPosts(state),
  isFetching: getIsFetching(state),
  errorMessage: getErrorMessage(state),
});

export default connect(mapStateToProps, {
  fetchPostsRequest,
})(PostListContainer);
