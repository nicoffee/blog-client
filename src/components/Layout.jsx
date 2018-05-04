import * as React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Header from '../components/Header';
import Modal from '../components/Modal';
import SignInModalContainer from '../containers/SignInModalContainer';

const InnerContainer = styled.div`
  margin: 80px auto;
  max-width: 700px;
  padding: 10px 20px;
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

  handleClose = e => {
    console.log('e', e.target);
    this.setState({isModalOpen: false});
  };

  render() {
    return (
      <ThemeProvider theme={DefaultTheme || DarkTheme}>
        <React.Fragment>
          <Header onSignInClick={() => this.setState({isModalOpen: true})} />
          {this.state.isModalOpen && (
            <Modal>
              <SignInModalContainer onClickOutside={e => this.handleClose(e)} />
            </Modal>
          )}
          <InnerContainer>{this.props.children}</InnerContainer>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Layout;
