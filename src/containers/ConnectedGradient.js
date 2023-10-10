import { connect } from 'react-redux';

import Gradient from 'src/components/Gradient';

const mapStateToProps = (state) => ({
  direction: state.direction,
  firstColor: state.firstColor,
  lastColor: state.lastColor,
});

const ConnectedGradient = connect(mapStateToProps)(Gradient);

export default ConnectedGradient;
