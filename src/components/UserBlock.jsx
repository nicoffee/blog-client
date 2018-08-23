// @flow

import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import UserIcon from '../assets/icons/User';

const StyledContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

const UserImage = styled.div`
  cursor: pointer;

  svg {
    fill: ${props =>
      props.isDropdownOpen
        ? props.theme.iconHoverColor
        : props.theme.iconColor};
  }

  &:hover svg {
    fill: ${props => props.theme.iconHoverColor};
  }
`;

const StyledDropdown = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  width: 200px;
  margin-top: 5px;
  background-color: ${props => props.theme.primaryBackgroundColor};
  border-radius: ${props => props.theme.smallBorderRadius};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.35);

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    padding: 10px;
    cursor: pointer;
    transition: background-color ${props => props.theme.basicAnimationPreset},
      color ${props => props.theme.basicAnimationPreset};

    &:hover {
      background-color: ${props => props.theme.secondaryColor};
      color: ${props => props.theme.fontColor};
    }

    a {
      width: 100%;
    }
  }
`;

type Props = {
  handleLogout: Function,
  fetchLogoutRequest: Function,
};

type State = {
  isDropdownOpen: boolean,
};

class UserBlock extends React.PureComponent<Props, State> {
  state = {
    isDropdownOpen: false,
  };

  componentDidMount() {
    //$FlowFixMe
    document.body.addEventListener(
      'click',
      this.handleDropdownClose.bind(this)
    );
  }

  componentWillUnmount() {
    //$FlowFixMe
    document.body.removeEventListener('click', this.handleDropdownClose);
  }

  handleDropdownClose(e: SyntheticMouseEvent<>) {
    if (
      this.dropdown.current &&
      e.target !== this.dropdown.current &&
      !this.dropdown.current.contains(e.target)
    ) {
      this.setState({isDropdownOpen: false});
    }
  }

  dropdown = React.createRef();

  render() {
    return (
      <StyledContainer>
        <UserImage
          isDropdownOpen={this.state.isDropdownOpen}
          onClick={() => this.setState({isDropdownOpen: true})}>
          <UserIcon />
        </UserImage>
        {this.state.isDropdownOpen && (
          <StyledDropdown innerRef={this.dropdown}>
            <ul>
              <li>
                <Link to="/new">New Post</Link>
              </li>
              <li onClick={this.props.fetchLogoutRequest}>Sign Out</li>
            </ul>
          </StyledDropdown>
        )}
      </StyledContainer>
    );
  }
}

export default UserBlock;
