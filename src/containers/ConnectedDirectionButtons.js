import { connect } from 'react-redux';

import { changeDirection } from 'src/store/actions';

import DirectionButtons from 'src/components/DirectionButtons';

const mapDispatchToProps = (dispatch) => ({
  changeDirection: (direction) => {
    dispatch(changeDirection(direction));
  },
});

const ConnectedDirectionButtons = connect(null, mapDispatchToProps)(DirectionButtons);

export default ConnectedDirectionButtons;
