// @flow

import * as React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledPost = styled.div`
  width: 700px;
  padding: 0.25em 1em;
  margin: 0 1em;

  input,
  textarea {
    font-size: 18px;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    width: 100%;
    padding: 15px;
    font-weight: 100;
  }
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  
  label {
    width: 20%:
  }

  div {
    width: 70%;
  }
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
          <FormContent>
            <FormGroup>
              <label htmlFor="title">Title:</label>
              <div>
                <input
                  id="title"
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={e => this.updateData(e)}
                />
              </div>
            </FormGroup>
            <FormGroup>
              <label htmlFor="content">Text:</label>
              <div>
                <textarea
                  id="content"
                  name="body"
                  value={this.state.body}
                  onChange={e => this.updateData(e)}
                  rows={20}
                />
              </div>
            </FormGroup>
          </FormContent>
          <Button primary type="submit" onClick={e => this.submitForm(e)}>
            Save
          </Button>
        </form>
      </StyledPost>
    );
  }
}

export default Post;
