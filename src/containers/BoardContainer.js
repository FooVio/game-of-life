import { connect } from 'react-redux';
import { toggleCell } from '../actions';
import Board from '../components/Board';

const mapStateToProps = state => ({ board: state.board });

const mapDispatchToProps = dispatch => {
  return {
    onClickCell: (row, col) => dispatch(toggleCell(row, col))
  };
};

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;
