import React from 'react';
import PropTypes from 'prop-types';

const DirectionButtons = ({ changeDirection }) => (
  <div className="buttons group">
    <button
      type="button"
      className="button"
      id="to45"
      onClick={() => changeDirection(45)}
    >
      45°
    </button>
    <button
      type="button"
      className="button"
      id="to90"
      onClick={() => changeDirection(90)}
    >
      90°
    </button>
    <button
      type="button"
      className="button"
      id="to135"
      onClick={() => changeDirection(135)}
    >
      135°
    </button>
    <button
      type="button"
      className="button"
      id="to225"
      onClick={() => changeDirection(225)}
    >
      225°
    </button>
    <button
      type="button"
      className="button"
      id="to270"
      onClick={() => changeDirection(270)}
    >
      270°
    </button>
    <button
      type="button"
      className="button"
      id="to315"
      onClick={() => changeDirection(315)}
    >
      315°
    </button>
  </div>
);

DirectionButtons.propTypes = {
  changeDirection: PropTypes.func.isRequired,
};

export default DirectionButtons;
