import React, { Component } from 'react';
import { createBoard, tick } from '../lib/game';
import App from '../components/App';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: createBoard(20, 20, true)
    };
  }

  nextOnClick(board) {
    this.setState({
      board: tick(board)
    });
  }

  render() {
    return <App board={this.state.board} nextOnClick={this.nextOnClick} />;
  }
}

export default AppContainer;
