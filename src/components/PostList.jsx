// @flow

import * as React from 'react';
import Post from './Post';

const PostsList = ({ posts: Array<{title: string, body: string}>, fetchPosts: Function}) => (
  <div>
    <button onClick={() => fetchPosts()}>Fetch posts</button>
    {posts.map(post => (
      <Post
        key={post.id}
        title={post.title}
        body={post.body}
        img="https://picsum.photos/600/300/?random"
      />
    ))}
  </div>
);

export default PostsList;
