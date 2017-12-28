import React from 'react';
import '../assets/css/App.css';
import Board from './Board';

const App = props => (
  <div className="App">
    <Board board={props.board}/>
    <button type="button" onClick={props.nextStep.bind(props.context, props.board)}>></button>
  </div>
);

export default App;
