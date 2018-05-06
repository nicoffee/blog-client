// @flow

import * as React from 'react';
import styled from 'styled-components';
import {Button, FormGroup} from './Styled';

const StyledPost = styled.div`
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

type Props = {
  id?: string,
  title?: string,
  img?: string,
  body?: string,
  handleSubmit: Function,
};

type State = {
  title: string,
  picture: string,
  body: string,
};

class PostForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      title: props.title || '',
      picture: '',
      body: props.body || '',
    };
  }

  updateData(e: SyntheticInputEvent<>) {
    const data = e.target;
    this.setState({[data.name]: data.value});
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <StyledPost>
        <form>
          <FormContent>
            <FormGroup>
              <label htmlFor="picture">Image:</label>
              <div>
                <input
                  id="picture"
                  type="text"
                  name="picture"
                  value={this.state.picture}
                  onChange={e => this.updateData(e)}
                />
              </div>
            </FormGroup>
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
          <Button
            primary
            type="submit"
            onClick={e => handleSubmit(e, this.state)}>
            Save
          </Button>
        </form>
      </StyledPost>
    );
  }
}

export default PostForm;
