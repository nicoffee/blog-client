// @flow

import * as React from 'react';
import Formsy from 'formsy-react';
import styled from 'styled-components';
import FormGroup from './FormGroup';
import {Button} from './Styled';

const StyledPost = styled.div`
  input,
  textarea {
    width: 100%;
    padding: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    font-size: 18px;
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
  picture?: string,
  body?: string,
  handleSubmit: Function,
};

type State = {
  title: string,
  picture: string,
  body: string,
  canSubmit: boolean,
};

class PostForm extends React.Component<Props, State> {
  state = {
    title: this.props.title || '',
    picture: this.props.picture || '',
    body: this.props.body || '',
    canSubmit: false,
  };

  render() {
    const {handleSubmit} = this.props;

    return (
      <StyledPost>
        <Formsy
          onInvalid={() => this.setState({canSubmit: false})}
          onValid={() => this.setState({canSubmit: true})}
          onValidSubmit={e => handleSubmit(e, this.state)}>
          <FormContent>
            <FormGroup
              component="input"
              label="Title:"
              name="picture"
              value={this.state.picture}
            />
            <FormGroup
              component="input"
              label="Text:"
              name="title"
              required
              value={this.state.picture}
            />
            <FormGroup
              component="textarea"
              label="Image:"
              name="body"
              required
              validationError="This is not a valid email"
              validations="isEmail"
              value={this.state.body}
            />
          </FormContent>
          <Button disabled={!this.state.canSubmit} primary type="submit">
            Save
          </Button>
        </Formsy>
      </StyledPost>
    );
  }
}

export default PostForm;
