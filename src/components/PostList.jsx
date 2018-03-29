// @flow

import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostsList = ({ posts, fetchPosts }) => (
  <div>
    <button onClick={() => fetchPosts()}>Fetch posts</button>
    {posts.map(post => <Post key={post.id} />)}
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func
};

export default PostsList;
