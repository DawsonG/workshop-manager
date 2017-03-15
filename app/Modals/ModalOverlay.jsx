import React from 'react';

import SettingsModal from './SettingsModal';

import styles from './modal.scss';

const ModalOverlay = ({ modal }) => {
  let modalComponent = null;

  switch (modal) {
    case 'settings':
      modalComponent = <SettingsModal />;
      break;
    default:
      break;
  }

  return (
    <div className={styles.overlay}>
      {modalComponent}
    </div>
  );
};

ModalOverlay.propTypes = {
  modal: React.PropTypes.node.isRequired
};

export default ModalOverlay;
