/* eslint-disable no-else-return */
// on importe les constantes qui contiennent le nom de nos actions
// ceci afin de ne pas se tromper sur le nommage
import {
  CHANGE_DIRECTION,
  CHANGE_FIRST_COLOR,
  CHANGE_LAST_COLOR,
} from './actions';

// notre state initial
// celui qui sera chargé au début
const initialState = {
  firstColor: '#212f23',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

// reducer : une fonction appelée a chaque nouvelle action.
// le reducer recoit l'ancien state, et l'action
// il renvoie le nouveau state, selon l'action qu'il recoit.
// note : le parametre par défaut de state (initialState)
// contient la valeur initiale du state.
// en effet, redux appele a l'initialisation le reducer sans parametres.
// du coup, le state prendra la valeur par défaut.
function reducer(state = initialState, action) {
  // je switch sur le type de mon action
  switch (action.type) {
    // note : j'utilise les constantes du fichier actions dans mon CASE
    case CHANGE_FIRST_COLOR:
      // je renvoie le nouveau state
      return { // je crée un objet
        ...state, // je recopie dedans l'ancien state
        // puis je change ce que je veux
        nbColors: state.nbColors + 1,
        firstColor: action.color,
      };
    case CHANGE_LAST_COLOR:
      return {
        ...state, // je recopie l'ancien state
        // puis je change ce que je veux
        nbColors: state.nbColors + 1,
        lastColor: action.color,
      };
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: `${action.direction}deg`,
      };
    default:
      // default : je n'ai pas trouvé d'action qui m'intéresse.
      // je renvoie le state tel qu'il est.
      return state;
  }
}

export default reducer;
