// @flow

import * as React from 'react';
import {withFormsy} from 'formsy-react';
import styled from 'styled-components';
import TextArea from './TextArea';
import Input from './Input';
import ErrorMessage from './ErrorMessage';

const StyledFormGroup = styled.div`
  width: 100%;
  margin-bottom: 30px;

  label {
    display: inline-block;
    margin-bottom: 10px;
    color: ${props => props.theme.fontColor};
    font-size: ${props => props.theme.smallFontSize};
  }

  input,
  textarea {
    margin-bottom: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

class FormGroup extends React.Component {
  componentDidMount() {
    if (this.props.initialValue) {
      this.props.setValue(this.props.initialValue);
    }
  }

  changeValue = (e: SyntheticInputEvent<>) => {
    this.props.setValue(e.currentTarget.value);
  };

  render() {
    const {label, component, name, type} = this.props;
    const errorMessage = this.props.getErrorMessage();

    return (
      <StyledFormGroup>
        <label htmlFor={name}>{label}</label>
        <div>
          {component === 'textarea' ? (
            <TextArea
              id={name}
              isInvalid={!!errorMessage}
              onChange={this.changeValue}
              rows={this.props.rows}
              value={this.props.getValue() || ''}
            />
          ) : (
            <Input
              id={name}
              isInvalid={!!errorMessage}
              onChange={this.changeValue}
              type={type || 'text'}
              value={this.props.getValue() || ''}
            />
          )}
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </div>
      </StyledFormGroup>
    );
  }
}

export default withFormsy(FormGroup);
