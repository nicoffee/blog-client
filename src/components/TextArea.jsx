import React from 'react';
import { withFormsy } from 'formsy-react';
import styled from 'styled-components';
import { TextArea } from './Styled';
import * as variables from '../types/style-variables';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  input {
    margin-bottom: 10px;
  }
`;

export const StyledError = styled.span`
  color: ${variables.ERROR_COLOR};
  font-size: ${variables.SMALL_FONT_SIZE};
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
    return (
      <TextArea
        id={this.props.name}
        onChange={this.changeValue}
        type={this.props.type || 'text'}
        value={this.props.getValue() || ''}
      />
    );
  }
}

export default withFormsy(MyInput);
