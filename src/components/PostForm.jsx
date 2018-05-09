// @flow

import * as React from 'react';
import Formsy from 'formsy-react';
import styled from 'styled-components';
import FormGroup from './FormGroup';
import Input from './Input';
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

  changeValue = event => {
    this.setValue(event.currentTarget.value);
  };

  render() {
    const {handleSubmit} = this.props;

    return (
      <StyledPost>
        <Formsy
          onValidSubmit={e => handleSubmit(e, this.state)}
          onValid={() => this.setState({canSubmit: true})}
          onInvalid={() => this.setState({canSubmit: false})}>
          <FormContent>
            <FormGroup
              component="input"
              name="picture"
              value={this.state.picture}
              onChange={() => this.changeValue}
              label="Title:"
            />
            <FormGroup
              component="input"
              name="title"
              value={this.state.picture}
              onChange={() => this.changeValue}
              label="Text:"
              required
            />
            <FormGroup
              component="textarea"
              name="body"
              value={this.state.body}
              validations="isEmail"
              validationError="This is not a valid email"
              onChange={() => this.changeValue}
              label="Image:"
              required
            />
          </FormContent>
          <Button primary type="submit" disabled={!this.state.canSubmit}>
            Save
          </Button>
        </Formsy>
      </StyledPost>
    );
  }
}

export default PostForm;
