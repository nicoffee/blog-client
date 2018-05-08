import React from 'react';
import Input from './Input';
import {StyledFormGroup} from './Styled';

const FormGroup = props => (
  <StyledFormGroup>
    <label htmlFor={props.name}>{props.label}</label>
    {!props.component && (
      <Input
        onChange={props.onChange}
        name={props.name}
        type={props.type || 'text'}
        validations={props.validations}
        validationError={props.validationError}
        required={props.required}
      />
    )}
  </StyledFormGroup>
);

export default FormGroup;
