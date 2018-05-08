import React from 'react';
import {mount} from 'enzyme';
import 'jest-styled-components';
import Comment, {StyledComment} from '../../components/Comment';

describe('Comment', () => {
  let props;
  let mountedComment;
  
  const comment = () => {
    if (!mountedComment) {
      mountedComment = mount(
        <Comment {...props} />
      );
    }

    return mountedComment;
  }

  beforeEach(() => {
    props = {
      name: undefined,
      body: undefined,
    };
    mountedComment = undefined;
  });

  it('always renders a div', () => {
    const divs = comment().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it('always renders a `StyledComment`', () => {
    expect(comment().find('div').length).toBe(1);
  });

  it('always renders a span', () => {
    expect(comment().find('span').length).toBe(1);
  });

  it('always renders a paragraph', () => {
    expect(comment().find('p').length).toBe(1);
  });

  // it("contains everything else that gets rendered", () => {
  //   const divs = comment().find("div");
  //   const wrappingDiv = divs.first();
    
  //   expect(wrappingDiv.children()).toEqual(comment().children());
  // });
});
