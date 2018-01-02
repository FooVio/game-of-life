import React from 'react';
import '../assets/css/App.css';
import BoardContainer from '../containers/BoardContainer';
import ControlPanelContainer from '../containers/ControlPanelContainer';

const App = () => (
  <div className="App">
    <BoardContainer />
    <ControlPanelContainer />
  </div>
);

export default App;
