import * as React from 'react';
import {connect} from 'react-redux';
import {openModal} from '../actions';
import {getisModalOpen} from '../reducers/modal';
import {getUserName} from '../reducers/user';
import Header from '../components/Header';

const HeaderContainer = props => <Header {...props} />;

const mapStateToProps = state => ({
  isModalOpen: getisModalOpen(state),
  user: getUserName(state),
});

export default connect(mapStateToProps, {openModal})(HeaderContainer);
