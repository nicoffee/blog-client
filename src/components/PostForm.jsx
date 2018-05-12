// @flow

import * as React from 'react';
import Formsy from 'formsy-react';
import styled from 'styled-components';
import FormGroup from './FormGroup';
import {Button} from './Styled';

const FormInner = styled.div`
  display: flex;
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
          onValidSubmit={e => handleSubmit(e, this.state)}>
          <FormGroup label="Title:" name="picture" />
          <FormGroup label="Text:" name="title" required />
          <FormGroup component="textarea" label="Image:" name="body" required />
          <Button disabled={!this.state.canSubmit} primary type="submit">
            Save
          </Button>
        </Formsy>
      </FormInner>
    );
  }
}

export default PostForm;
