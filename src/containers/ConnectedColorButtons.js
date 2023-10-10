import { connect } from 'react-redux';

import { changeFirstColor, changeLastColor } from 'src/store/actions';

import { randomHexColor } from 'src/utils';

// j'importe mon composant de présentation
// celui qui ne connait pas redux
import ColorButtons from 'src/components/ColorButtons';

const mapDispatchToProps = (dispatch) => ({
  randomFirstColor: () => {
    dispatch(changeFirstColor(randomHexColor()));
  },
  randomAllColors: () => {
    dispatch(changeFirstColor(randomHexColor()));
    dispatch(changeLastColor(randomHexColor()));
  },
  randomLastColor: () => {
    dispatch(changeLastColor(randomHexColor()));
  },
});

// si on n'a pas besoin de mapStateToProps (si on ne souhaite pas donner des données au composant)
// on peut simplement passer "null"
const ConnectedColorButtons = connect(null, mapDispatchToProps)(ColorButtons);

export default ConnectedColorButtons;
