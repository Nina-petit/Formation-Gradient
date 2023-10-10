function createStore(reducer) {
  // la variable qui contient notre state
  let currentState;

  // un tableau qui stockera nos callback de subscribe
  // un tableau de fonctions !
  const listeners = [];

  const dispatch = (action) => {
    // j'appelle mon reducer, avec le state actuel, et l'action
    // on est dans le dispatch donc on a l'action
    // et je sauvegarde le résultat de l'appel de reducer dans currentState
    currentState = reducer(currentState, action);

    // j'ai joué mon action,  j'ai modifié le state.
    // maintenant, je joue mes listeners
    listeners.forEach((listener) => listener());
  };

  // subscribe : on donne un callback, a exécuter lors de modifications du state.
  // attention : on peut appeler plusieurs fois subscribe !
  const subscribe = (callback) => {
    // je veux ajouter le callback, dans le tableau listeners
    listeners.push(callback);
  };

  // getstate une fonction qui renvoie le state
  const getState = () => currentState;

  // pour initialiser mon state, j'apelle dispatch avec une action "INIT"
  // du coup dispatch appelera le reducer
  // qui s'initialisera
  dispatch({ type: 'INIT_REDUX' });

  return {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
  };
}
