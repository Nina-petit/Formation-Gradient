import React from 'react';
import PropTypes from 'prop-types';

const NbColors = ({ nbr }) => (
  <div id="nbColors">
    {nbr} couleur(s) générée(s)
  </div>
);

NbColors.propTypes = {
  nbr: PropTypes.number.isRequired,
};

export default NbColors;
