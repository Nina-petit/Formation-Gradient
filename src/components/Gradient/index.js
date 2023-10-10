import React from 'react';
import PropTypes from 'prop-types';

const Gradient = ({ direction, firstColor, lastColor }) => (
  <div
    style={{
      background:
      `linear-gradient(${direction},${firstColor},${lastColor})`,
    }}
    id="gradient"
  />
);

Gradient.propTypes = {
  direction: PropTypes.string.isRequired,
  firstColor: PropTypes.string.isRequired,
  lastColor: PropTypes.string.isRequired,
};

export default Gradient;
