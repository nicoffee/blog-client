import React from 'react';
import {withFormsy} from 'formsy-react';
import styled from 'styled-components';
import {Input} from './Styled';

export const InputWrapper = styled.div`
  display; flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
  }

  span {
    color: #f44336;
  }
`;

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const errorMessage = this.props.getErrorMessage();

    return (
      <InputWrapper>
        <Input
          onChange={this.changeValue}
          type={this.props.type || 'text'}
          value={this.props.getValue() || ''}
        />
        <span>{errorMessage}</span>
      </InputWrapper>
    );
  }
}

export default withFormsy(MyInput);
