// @flow

import * as React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledPost = styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

type Props = {
  id: number,
  title: string,
  img: string,
  body: string,
  editPost: Function,
};

class Post extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      body: props.body,
    };
  }

  submitForm(e) {
    e.preventDefault();

    this.props.editPost(this.props.id, {
      title: this.state.title,
      body: this.state.body,
    });
  }

  updateData(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <StyledPost>
        <form>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.updateData(e)}
          />
          <br />
          <textarea
            name="body"
            value={this.state.body}
            onChange={e => this.updateData(e)}
          />
          <Button primary type="submit" onClick={e => this.submitForm(e)}>
            Save
          </Button>
        </form>
      </StyledPost>
    );
  }
}

export default Post;
