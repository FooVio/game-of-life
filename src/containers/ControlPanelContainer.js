import { connect } from 'react-redux';
import { next, previous } from '../actions';
import ControlPanel from '../components/ControlPanel';

const mapDispatchToProps = dispatch => {
  return {
    onClickNext: () => dispatch(next()),
    onClickPrevious: () => dispatch(previous())
  };
};

const ControlPanelContainer = connect(null, mapDispatchToProps)(ControlPanel);

export default ControlPanelContainer;
