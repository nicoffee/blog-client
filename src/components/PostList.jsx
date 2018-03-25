// @flow

import React from 'react';
import PropTypes from 'prop-types';

const PostsList = ({ posts, fetchPosts }) => (
  <div>
    <button onClick={() => fetchPosts()}>Fetch posts</button>
    {posts.map(post => (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
      </div>
    ))}
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func
};

export default PostsList;
