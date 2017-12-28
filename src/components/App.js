import React from 'react';
import '../assets/css/App.css';
import Board from './Board';

const App = props => (
  <div className="App">
    <Board board={props.board}/>
    <button type="button" onClick={() => props.nextOnClick(props.board)}>></button>
  </div>
);

export default App;
