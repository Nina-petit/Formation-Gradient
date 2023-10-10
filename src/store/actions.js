// nos actions
export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export const CHANGE_LAST_COLOR = 'CHANGE_LAST_COLOR';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

// nos action creator = fonctions qui fabriquent une action
// l'action creator va prendre en paramètre les paramètres de l'action (si il y a)
// et va nous renvoyer un objet action,
// avec le type et éventuellement les paramètres.
export const changeFirstColor = (color) => ({
  type: CHANGE_FIRST_COLOR,
  color: color,
  // note : on aurait pu utiliser la shorthand property ici
  // écrire juste color,
});

export const changeLastColor = (color) => ({
  type: CHANGE_LAST_COLOR,
  color: color,
});

export const changeDirection = (direction) => ({
  type: CHANGE_DIRECTION,
  direction: direction,
});
