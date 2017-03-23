import React from 'react';
import { connect } from 'react-redux';

import SettingsModal from './SettingsModal';

import { closeModal } from './actions';

import styles from './modal.scss';

const ModalOverlay = ({ modalName, overlayClick }) => {
  let modalComponent = null;

  switch (modalName) {
    case 'settings':
      modalComponent = <SettingsModal />;
      break;
    default:
      break;
  }

  return (
    <div className={styles.overlay} onClick={overlayClick}>
      {modalComponent}
    </div>
  );
};

ModalOverlay.propTypes = {
  modalName: React.PropTypes.node,
  overlayClick: React.PropTypes.func.isRequired
};

ModalOverlay.defaultProps = {
  modalName: ''
};

const mapStateToProps = (state) => ({
  modalName: state.app.modal
});

const mapDispatchToProps = (dispatch) => ({
  overlayClick: () => {
    dispatch(closeModal());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalOverlay);
