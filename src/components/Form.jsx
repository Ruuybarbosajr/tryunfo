import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

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
        <label htmlFor="name-input">
          Nome
          <br />
          <input
            className="inputs"
            type="text"
            name="cardName"
            id="name-input"
            value={ cardName }
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição
          <br />
          <textarea
            className="inputs"
            name="cardDescription"
            id="description-input"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1-input">
          Attr01
          <br />
          <input
            className="inputs"
            max={ 90 }
            min={ 0 }
            type="number"
            name="cardAttr1"
            id="attr1-input"
            value={ cardAttr1 }
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2-input">
          Attr02
          <br />
          <input
            className="inputs"
            max={ 90 }
            min={ 0 }
            type="number"
            name="cardAttr2"
            id="attr2-input"
            value={ cardAttr2 }
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3-input">
          Attr03
          <br />
          <input
            className="inputs"
            max={ 90 }
            min={ 0 }
            type="number"
            name="cardAttr3"
            id="attr3-input"
            value={ cardAttr3 }
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image-input">
          Imagem
          <br />
          <input
            type="text"
            name="cardImage"
            id="image-input"
            value={ cardImage }
            data-testid="image-input"
            onChange={ onInputChange }
            className="inputs"
          />
        </label>

        <label htmlFor="rare-input">
          Raridade
          <br />
          <select
            className="rarity-select"
            name="cardRare"
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
        { !hasTrunfo ? (
          <label htmlFor="trunfo-input">
            <input
              type="checkbox"
              name="cardTrunfo"
              id="trunfo-input"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trybe Trunfo
          </label>
        ) : (
          <span>Você já tem um Super Trunfo em seu baralho</span>
        ) }

        <button
          className="button-save"
          type="submit"
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          onClick={ onSaveButtonClick }
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
