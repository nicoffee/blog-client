import React, {Component} from 'react';
import {withFormsy} from 'formsy-react';
import styled from 'styled-components';
import {StyledFormGroup, Input, TextArea} from './Styled';
import * as variables from '../types/style-variables';

export const StyledError = styled.span`
  color: ${variables.ERROR_COLOR};
  font-size: ${variables.SMALL_FONT_SIZE};
`;

class FormGroup extends Component {
  changeValue = (e: SyntheticInputEvent<>) => {
    this.props.setValue(e.currentTarget.value);
  };

  render() {
    const {label, component, ...rest} = this.props;
    const errorMessage = this.props.getErrorMessage();

    return (
      <StyledFormGroup>
        <label htmlFor={rest.name}>{label}</label>
        {component === 'textarea' ? (
          <TextArea
            id={rest.name}
            onChange={this.changeValue}
            value={this.props.getValue() || ''}
          />
        ) : (
          <Input
            id={rest.name}
            onChange={this.changeValue}
            value={this.props.getValue() || ''}
          />
        )}
        <StyledError>{errorMessage}</StyledError>
      </StyledFormGroup>
    );
  }
}

export default withFormsy(FormGroup);
