import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Atributo extends Component {
  render() {
    const { dataTestid, name, id, legend, type } = this.props;

    return (
      <label htmlFor={ id }>
        { legend }
        <input
          type={ type }
          name={ name }
          id={ id }
          data-testid={ dataTestid }
        />
      </label>
    );
  }
}

Atributo.propTypes = {
  dataTestid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
