// @flow

import * as React from 'react';
import Formsy from 'formsy-react';
import styled from 'styled-components';
import FormGroup from './FormGroup';
import Button from '../ui/Button';

const FormInner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  padding: ${props => props.theme.largePadding};
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
    const {handleSubmit, picture, title, body} = this.props;
    const {canSubmit} = this.state;

    return (
      <FormInner>
        <Formsy
          onInvalid={() => this.setState({canSubmit: false})}
          onValid={() => this.setState({canSubmit: true})}
          onValidSubmit={handleSubmit}>
          <FormGroup initialValue={picture} label="Picture:" name="picture" />
          <FormGroup
            initialValue={title}
            label="Title:"
            name="title"
            required
          />
          <FormGroup
            component="textarea"
            initialValue={body}
            label="Text:"
            name="body"
            required
            rows={10}
          />
          <Button disabled={!canSubmit} primary type="submit">
            Save
          </Button>
        </Formsy>
      </FormInner>
    );
  }
}

export default PostForm;
