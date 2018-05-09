import React from 'react';
import {withFormsy} from 'formsy-react';
import styled from 'styled-components';
import Input from './Input';
import TextArea from './TextArea';
import {StyledFormGroup} from './Styled';
import * as variables from '../types/style-variables';

export const StyledError = styled.span`
  color: ${variables.ERROR_COLOR};
  font-size: ${variables.SMALL_FONT_SIZE};
`;

const renderField = (component = 'input', inputProps) => {
  console.log('component', component);

  return React.createElement(component, inputProps);
};

// const StyledError = styled.span`
//   color: ${variables.ERROR_COLOR};
//   font-size: ${variables.SMALL_FONT_SIZE};
// `;

const FormGroup = ({
  label,
  component,
  validations,
  validationError,
  ...rest
}) => (
  <StyledFormGroup>
    <label htmlFor={rest.name}>{label}</label>
    {component === 'textarea' ? <TextArea {...rest} /> : <Input {...rest} />}
    <StyledError>errorMessage</StyledError>
  </StyledFormGroup>
);

export default FormGroup;
