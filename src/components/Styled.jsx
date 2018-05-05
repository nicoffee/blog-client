import styled, {css} from 'styled-components';

export const Input = styled.input`
  font-size: 18px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 100%;
  padding: 15px;
  font-weight: 100;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
  
  label {
    width: 30%:
  }

  div {
    display: flex;
    width: 70%;
  }
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 8px 16px;
  margin: 0 1em;
  color: ${props => props.theme.color};
  border: 1px solid #28abe3;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  ${props =>
    props.primary &&
    css`
      background: #28abe3;
      color: ${props.theme.color};
    `};

  &:hover {
    background-color: #28abe3;
    color: #ffffff;
  }
`;

export default Button;
