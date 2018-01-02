import React from 'react';

const ControlPanel = props => (
  <div class="controlPanel">
    <button id="nextStep" type="button" onClick={() => props.onClickNext()}>></button>
  </div>
);

export default ControlPanel;
