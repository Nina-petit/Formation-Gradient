// dans ce fichier, je veux créer le container
// de mon composant NBColors
// en d'autres termes, je veux un composant connecté,
// qui va aller chercher les infos dont il a besoin
// dans redux
// et qui enfin les passera au composant de présentation

import { connect } from 'react-redux';

import NbColors from 'src/components/NbColors';

const mapStateToProps = (state) => ({
  nbr: state.nbColors,
});

const ConnectedNbColors = connect(mapStateToProps)(NbColors);

export default ConnectedNbColors;
