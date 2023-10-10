// == Imports
// randomHexColor renvoie une couleur hexa aléatoire, du genre : #ffee33
// generateSpanColor fabrique un span qui affiche une couleur
import { randomHexColor, generateSpanColor } from './utils';

// on importe nos action creator, qui sont responsables
// de "fabriquer" nos actions
import {
  changeFirstColor,
  changeLastColor,
  changeDirection,
} from './store/actions';

// import du store
import store from './store';

// fabrique l'affichage dans l'encart bleu du nombre de couleurs
// qui ont été générées
function renderNbColors() {
  // store.getState() permet de récupérer l'état redux a l'instant T
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
// fabrique le carré de dégradé
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
// fabrique l'affichage des couleurs textuelles
function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
// je fais un premier tour de render.
renderNbColors();
renderGradient();
renderColors();

// abonnement lorsque le state de mon store redux change,
// je veux redessiner mon application
// la fonction donnée a subscribe sera appelée
// a chaque modification du state
store.subscribe(() => {
  renderNbColors();
  renderGradient();
  renderColors();
});

// == Nos event listeners
// On cable tous nos boutons de l'application
// changer les deux couleurs
document.getElementById('randAll')
  .addEventListener('click', () => {
    // debug
    // j'envoie une action : je demande a mon store redux
    // de modifier les deux couleurs
    // envoyer une action va appeler le reducer
    // qui calculera le nouveau state en fonction de cette action
    // note : une action peut prendre des parametres.
    store.dispatch(changeFirstColor(randomHexColor()));
    store.dispatch(changeLastColor(randomHexColor()));
  });

// changer la couleur de gauche
document.getElementById('randFirst')
  .addEventListener('click', () => {
    store.dispatch(changeFirstColor(randomHexColor()));
  });

// changer la couleur de droite
document.getElementById('randLast')
  .addEventListener('click', () => {
    store.dispatch(changeLastColor(randomHexColor()));
  });

// changer la direction du dégradé vers la gauche
document.getElementById('toLeft')
  .addEventListener('click', () => {
    store.dispatch(changeDirection(270));
  });

// changer la direction du dégradé vers la droite
document.getElementById('toRight')
  .addEventListener('click', () => {
    store.dispatch(changeDirection(90));
  });

document.getElementById('toTopRight')
  .addEventListener('click', () => {
    store.dispatch(changeDirection(45));
  });

document.getElementById('toBottomRight')
  .addEventListener('click', () => {
    store.dispatch(changeDirection(135));
  });

document.getElementById('toTopLeft')
  .addEventListener('click', () => {
    store.dispatch(changeDirection(315));
  });

document.getElementById('toBottomLeft')
  .addEventListener('click', () => {
    store.dispatch(changeDirection(225));
  });
