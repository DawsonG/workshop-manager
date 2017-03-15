import React from 'react';
// import { connect } from 'react-redux';
import { shell } from 'electron';

import styles from './topbar.scss';

function externalPoweredBy() {
  shell.openExternal('https://darksky.net/poweredby');
}

const Topbar = ({ openMachineAdd, openSettings }) => (
  <div>
    <nav className={styles.topbar}>
      <button type="button" onClick={openMachineAdd}><span className="icon-machine-add" /></button>
      <button type="button" onClick={openSettings}><span className="icon-cog" /></button>
    </nav>

    <div className={styles.additionalInformation}>
      <button type="button" className="linkButton" onClick={externalPoweredBy}>Powered by Dark Sky</button>
    </div>
  </div>
);

Topbar.propTypes = {
  openMachineAdd: React.PropTypes.func.isRequired,
  openSettings: React.PropTypes.func.isRequired
};

export default Topbar;
