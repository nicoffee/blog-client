import React from 'react';
import {MemoryRouter} from 'react-router';
import {mount} from 'enzyme';
import 'jest-styled-components';
import Post from '../../components/Post';
import Theme from '../../ui/Theme';

describe('Post', () => {
  it('always renders a div', () => {
    const mountedPost = mount(
      <MemoryRouter>
        <Theme>
          <Post info={{body: 'body', title: 'title'}} />
        </Theme>
      </MemoryRouter>
    );
    const divs = mountedPost.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
