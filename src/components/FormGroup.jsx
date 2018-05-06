import React from 'react';
import {StyledFormGroup} from './Styled';

const FormGroup = props => (
  <StyledFormGroup>
    <label htmlFor="picture">{props.label}</label>
    {props.children}
  </StyledFormGroup>
);

export default FormGroup;
