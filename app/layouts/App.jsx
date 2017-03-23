import React from 'react';
import { connect } from 'react-redux';

import Topbar from '../Topbar/Topbar';
import ModalOverlay from '../Modals/ModalOverlay';
import { openModal } from '../Modals/actions';

import styles from './app.scss';


const App = ({ children, isModalOpen, modal, openMachineAdd, openSettings }) => (
  <div className={styles.container}>
    <Topbar openMachineAdd={openMachineAdd} openSettings={openSettings} />
    {children}

    {isModalOpen &&
      <ModalOverlay modal={modal} />
    }
  </div>
);

App.propTypes = {
  children: React.PropTypes.node.isRequired,
  isModalOpen: React.PropTypes.bool,
  modal: React.PropTypes.string,
  openMachineAdd: React.PropTypes.func.isRequired,
  openSettings: React.PropTypes.func.isRequired
};

App.defaultProps = {
  isModalOpen: false,
  modal: ''
};

const mapStateToProps = (state) => ({
  isModalOpen: state.app.isModalOpen,
  modal: state.app.modal
});

const mapDispatchToProps = (dispatch) => ({
  openMachineAdd: () => {
    dispatch(openModal('machineAdd'));
  },
  openSettings: () => {
    dispatch(openModal('settings'));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
