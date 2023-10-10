import { connect } from 'react-redux';

import ColorsText from 'src/components/ColorsText';

const mapStateToProps = (state) => ({
  firstColor: state.firstColor,
  lastColor: state.lastColor,
});

const ConnectedColorsText = connect(mapStateToProps)(ColorsText);

export default ConnectedColorsText;
