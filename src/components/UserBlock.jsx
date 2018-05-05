// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import userIcon from './../images/user.svg';

const StyledContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

const StyledDropdown = styled.div`
  margin-top: 5px;
  right: 0;
  position: absolute;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.35);

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    padding: 10px;
  }
`;

type Props = {};

type State = {
  isDropdownOpen: boolean,
};

class UserBlock extends React.Component<Props, State> {
  state = {
    isDropdownOpen: false,
  };

  render() {
    return (
      <StyledContainer>
        <div onClick={() => this.setState({isDropdownOpen: true})}>
          <img src={userIcon} />
        </div>
        {this.state.isDropdownOpen && (
          <StyledDropdown>
            <ul>
              <li>
                <Link to="/new">New Post</Link>
              </li>
              <li>Switch to night theme</li>
              <li>Sign Out</li>
            </ul>
          </StyledDropdown>
        )}
      </StyledContainer>
    );
  }
}

export default UserBlock;
