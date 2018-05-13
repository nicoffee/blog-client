import React from 'react';
import {MemoryRouter} from 'react-router';
import {mount} from 'enzyme';
import 'jest-styled-components';
import Post from '../../components/Post';

describe('Post', () => {
  it('always renders a div', () => {
    const mountedPost = mount(
      <MemoryRouter>
        <Post info={{body: 'body', title: 'title'}} />
      </MemoryRouter>
    );
    const divs = mountedPost.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
