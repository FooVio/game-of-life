import React from 'react';

const ControlPanel = props => (
  <div class="controlPanel">
    <button id="previousStep" type="button" onClick={() => props.onClickPrevious()}>&lt;</button>
    <button id="nextStep" type="button" onClick={() => props.onClickNext()}>&gt;</button>
  </div>
);

export default ControlPanel;
