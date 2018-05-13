// @flow

import * as React from 'react';
import Formsy from 'formsy-react';
import styled from 'styled-components';
import FormGroup from './FormGroup';
import {Button} from './Styled';

const FormInner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  padding: 30px 40px;
`;

type Props = {
  id?: string,
  title?: string,
  picture?: string,
  body?: string,
  handleSubmit: Function,
};

type State = {
  canSubmit: boolean,
};

class PostForm extends React.Component<Props, State> {
  state = {
    canSubmit: false,
  };

  render() {
    const {handleSubmit} = this.props;

    return (
      <FormInner>
        <Formsy
          onInvalid={() => this.setState({canSubmit: false})}
          onValid={() => this.setState({canSubmit: true})}
          onValidSubmit={handleSubmit}>
          <FormGroup
            initialValue={this.props.picture}
            label="Picture:"
            name="picture"
          />
          <FormGroup
            initialValue={this.props.title}
            label="Title:"
            name="title"
            required
          />
          <FormGroup
            component="textarea"
            initialValue={this.props.body}
            label="Text:"
            name="body"
            required
          />
          <Button disabled={!this.state.canSubmit} primary type="submit">
            Save
          </Button>
        </Formsy>
      </FormInner>
    );
  }
}

export default PostForm;
