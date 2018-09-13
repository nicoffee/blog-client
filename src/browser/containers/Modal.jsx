// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../modules/app';
import Modal from '../components/Modal';

const ModalContainer = props => <Modal {...props} />;

export default connect(null, {
  closeModal,
})(ModalContainer);
