import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  padding: 6px 0;
  border-bottom: 1px solid ${props => props.theme.disabledColor};
  border-color: ${props => props.isFocused && props.theme.secondaryColor};
  transition: border-color ${props => props.theme.basicAnimationPreset};

  svg {
    margin-right: 5px;
    width: 20px;
    height: 20px;
    fill: ${props =>
      props.isFocused ? props.theme.secondaryColor : props.theme.fontColor};
    stroke: ${props =>
      props.isFocused ? props.theme.secondaryColor : props.theme.fontColor};
    transition: fill ${props => props.theme.basicAnimationPreset},
      stroke ${props => props.theme.basicAnimationPreset};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  font-weight: 100;
  outline: none;
  font-size: inherit;
  background: none;
  color: ${props => props.theme.fontColor};
`;

class Search extends React.PureComponent {
  state = {
    isFocused: false,
  };

  render() {
    return (
      <StyledDiv isFocused={this.state.isFocused}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.966 52.966">
          <path d="M51.704 51.273L36.845 35.82c3.79-3.801 6.138-9.041 6.138-14.82 0-11.58-9.42-21-21-21s-21 9.42-21 21 9.42 21 21 21c5.083 0 9.748-1.817 13.384-4.832l14.895 15.491a.998.998 0 0 0 1.414.028 1 1 0 0 0 .028-1.414zM21.983 40c-10.477 0-19-8.523-19-19s8.523-19 19-19 19 8.523 19 19-8.524 19-19 19z" />
        </svg>
        <StyledInput
          {...this.props}
          onFocus={() => this.setState({isFocused: true})}
          onBlur={() => this.setState({isFocused: false})}
        />
      </StyledDiv>
    );
  }
}

export default Search;
