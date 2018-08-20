import * as React from 'react';
import styled from 'styled-components';
import MagnifierIcon from '../assets/icons/Magnifier';

const StyledDiv = styled.div`
  display: flex;
  padding: 6px 0;
  border-bottom: 1px solid ${props => props.theme.disabledColor};
  border-color: ${props => props.isFocused && props.theme.secondaryColor};
  transition: border-color ${props => props.theme.basicAnimationPreset};

  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    fill: ${props =>
      props.isFocused ? props.theme.secondaryColor : props.theme.iconColor};
    stroke: ${props =>
      props.isFocused ? props.theme.secondaryColor : props.theme.iconColor};
    transition: fill ${props => props.theme.basicAnimationPreset},
      stroke ${props => props.theme.basicAnimationPreset};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  color: ${props => props.theme.fontColor};
  font-size: inherit;
  font-weight: 100;
  outline: none;
`;

class Search extends React.PureComponent {
  state = {
    isFocused: false,
  };

  setFocus = isFocused => this.setState({isFocused});

  render() {
    return (
      <StyledDiv isFocused={this.state.isFocused}>
        <MagnifierIcon />
        <StyledInput
          {...this.props}
          onBlur={() => this.setFocus(false)}
          onFocus={() => this.setFocus(true)}
        />
      </StyledDiv>
    );
  }
}

export default Search;
