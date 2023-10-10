/* eslint-disable arrow-body-style */
// j'importe la fonction createStore de redux qui permet ... de créer un store
import { createStore } from 'redux';

// j'importe le reducer, c'est a dire la logique de mon store :
// une fonction qui changera le state selon les actions reçues et l'ancien state
import myReducer from './reducer';

// je crée le store
const store = createStore(
  myReducer,
  // cette ligne sert a faire marcher les devtools redux
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// je l'exporte.
export default store;
