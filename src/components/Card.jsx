import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Card extends Component {
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
    } = this.props;

    const img = 'https://pbs.twimg.com/profile_images/985608345741680640/dWSsB4Qb_400x400.jpg';

    return (
      <div className="preview-card">
        <h2 data-testid="name-card">{ cardName || 'NOME DO TRUNFO' }</h2>
        <div className="card-img">
          <img
            src={ cardImage || img }
            alt={ cardName }
            data-testid="image-card"
          />
        </div>
        <div className="description-card">
          <p data-testid="description-card">{ cardDescription || 'DESCRIÇÃO' }</p>
        </div>
        <div className="allAttrs-card">
          <p
            className="attrs-card"
            data-testid="attr1-card"
          >
            { `Attr01...........................      ${cardAttr1}` }
          </p>
          <p
            className="attrs-card"
            data-testid="attr2-card"
          >
            { `Attr02...........................      ${cardAttr2}` }
          </p>
          <p
            className="attrs-card"
            data-testid="attr3-card"
          >
            { `Attr03...........................      ${cardAttr3}` }
          </p>
        </div>
        <div className="superTrunfo-card">
          <p
            data-testid="rare-card"
            className="maiusc"
          >
            { cardRare || 'Normal' }
          </p>
          { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo ⭐️</p> : '' }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
