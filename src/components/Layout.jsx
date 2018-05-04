import * as React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Header from '../components/Header';
import Modal from '../components/Modal';
import SignInModalContainer from '../containers/SignInModalContainer';

const StyledDiv = styled.div`
  margin-top: 80px;
`;

const DefaultTheme = {
  color: '#28abe3',
};

const DarkTheme = {
  color: 'black',
};

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {isModalOpen: false};
  }

  render() {
    return (
      <ThemeProvider theme={DefaultTheme || DarkTheme}>
        <React.Fragment>
          <Header />
          {this.state.isModalOpen && (
            <Modal>
              <SignInModalContainer />
            </Modal>
          )}
          <StyledDiv>{this.props.children}</StyledDiv>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Layout;
