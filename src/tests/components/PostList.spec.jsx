import React from 'react';
import {mount} from 'enzyme';
import PostList from '../../components/PostList';

describe('Post', () => {
  it('always renders a div', () => {
    const mountedPost = mount(<PostList posts={[]} />);
    const divs = mountedPost.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
