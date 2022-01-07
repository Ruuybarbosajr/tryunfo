import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Input from './Input';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="forms">
        <Input
          legend="Nome"
          type="text"
          name="name-input"
          id="name-input"
          dataTestid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />

        <label htmlFor="description-input">
          Descrição
          <br />
          <textarea
            name="description-input"
            id="description-input"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <Input
          dataTestid="attr1-input"
          type="number"
          name="attr1-input"
          id="attr1-input"
          legend="Attr01"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />

        <Input
          dataTestid="attr2-input"
          type="number"
          name="attr2-input"
          id="attr2-input"
          legend="Attr02"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />

        <Input
          dataTestid="attr3-input"
          type="number"
          name="attr3-input"
          id="attr3-input"
          legend="Attr03"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        <Input
          legend="Imagem"
          type="text"
          name="image-input"
          id="image-input"
          dataTestid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <label htmlFor="rare-input">
          Raridade
          <br />
          <select
            name="rare-input"
            id="rare-input"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <Input
          legend="Super Trybe Trunfo"
          type="checkbox"
          name="trunfo-input"
          id="trunfo-input"
          dataTestid="trunfo-input"
          value={ cardTrunfo }
          onChange={ onInputChange }
        />

        <button
          type="submit"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
