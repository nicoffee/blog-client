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

  updateData(e: SyntheticInputEvent<>) {
    const data = e.target;
    this.setState({[data.name]: data.value});
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <StyledPost>
        <Formsy
          onValidSubmit={e => handleSubmit(e, this.state)}
          onValid={() => this.setState({canSubmit: true})}
          onInvalid={() => this.setState({canSubmit: false})}>
          <FormContent>
            <FormGroup component={Input} name="picture" label="Image:" />
            <FormGroup>
              <label htmlFor="title">Title:</label>
              <div>
                <Input name="title" required />
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
          <Button primary type="submit" disabled={!this.state.canSubmit}>
            Save
          </Button>
        </Formsy>
      </StyledPost>
    );
  }
}

export default PostForm;
