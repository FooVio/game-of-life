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

  nextStep(board) {
    this.setState({
      board: tick(board)
    });
  }

  render() {
    return <App board={this.state.board} nextStep={this.nextStep} context={this} />;
  }
}

export default AppContainer;
