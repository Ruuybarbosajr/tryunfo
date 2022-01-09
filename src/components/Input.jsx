import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Input extends Component {
  render() {
    const { dataTestid, name, id, legend, type, onInputChange, value } = this.props;
    return (
      <label htmlFor={ id }>
        { legend }
        <input
          type={ type }
          name={ name }
          id={ id }
          value={ value }
          data-testid={ dataTestid }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  dataTestid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
