// @flow

import * as React from 'react';
import PostPreviw from './PostPreview';
import type {post} from '../containers/PostList';

type Props = {
  posts: Array<post>,
};

const PostsList = (props: Props) => (
  <div>{props.posts.map(post => <PostPreviw key={post._id} {...post} />)}</div>
);

export default PostsList;
