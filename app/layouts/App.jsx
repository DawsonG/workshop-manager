import React from 'react';
import { connect } from 'react-redux';

import Topbar from '../Topbar/Topbar';
import ModalOverlay from '../Modals/ModalOverlay';

import styles from './app.scss';

const App = ({ children, isModalOpen, modal }) => (
  <div className={styles.container}>
    <Topbar openMachineAdd={() => {}} openSettings={() => {}} />
    {children}

    {isModalOpen &&
      <ModalOverlay modal={modal} />
    }
  </div>
);

App.propTypes = {
  children: React.PropTypes.node.isRequired,
  isModalOpen: React.PropTypes.bool,
  modal: React.PropTypes.string
};

App.defaultProps = {
  isModalOpen: false,
  modal: ''
};

const mapStateToProps = (state) => ({
  isModalOpen: state.app.isModalOpen,
  modal: state.app.modal
});

export default connect(mapStateToProps)(App);
