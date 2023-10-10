import React from 'react';
import PropTypes from 'prop-types';

const ColorsText = ({ firstColor, lastColor }) => (
  <div id="colors">
    <span style={{ color: firstColor }}>{firstColor}</span>
    -
    <span style={{ color: firstColor }}>{lastColor}</span>
  </div>
);

ColorsText.propTypes = {
  firstColor: PropTypes.string.isRequired,
  lastColor: PropTypes.string.isRequired,
};

export default ColorsText;
