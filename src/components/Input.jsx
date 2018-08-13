import styled from 'styled-components';

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid
    ${props =>
      props.isInvalid ? props.theme.errorColor : props.theme.disabledColor};
  border-radius: ${props => props.theme.smallBorderRadius};
  font-size: ${props => props.theme.basicFontSize};
  font-size: 18px;
  font-weight: 100;
  outline: none;
  transition: border-color ${props => props.theme.basicAnimationPreset};

  &:focus {
    border-color: ${props =>
      props.isInvalid ? props.theme.errorColor : props.theme.secondaryColor};
  }
`;

export default Input;
