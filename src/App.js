import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardsDone: [],
      nameFilter: '',
      cardsFilter: [],
      rarityFilter: '',
      trunfoFilter: false,
    };
  }

  handleDeleteCLick = ({ target }) => {
    const { cardsDone, cardsFilter } = this.state;
    this.setState({
      cardsDone: cardsDone.filter((card) => card.name !== target.parentNode.id),
      cardsFilter: cardsFilter.filter((card) => card.name !== target.parentNode.id),
    }, () => this.setState((prevState) => ({
      hasTrunfo: prevState.cardsDone.some((cards) => cards.superTrunfo),
    })));
  }

  handleChangeFilter = ({ target }) => {
    const { cardsDone } = this.state;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      cardsFilter: cardsDone.filter((card) => (
        value === card.superTrunfo || card.rarity === value
        || (card.name.includes(value) && value !== ''))),
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      this.checkButton,
    );
  };

  checkButton = () => {
    const maxAllAttr = 210;
    const limMaxAttr = 90;
    const limMinAttr = 0;
    const { cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2,
      cardAttr3 } = this.state;

    if (
      cardName && cardDescription && cardImage && cardRare
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxAllAttr
      && cardAttr1 >= limMinAttr && cardAttr1 <= limMaxAttr && cardAttr2 >= limMinAttr
      && cardAttr2 <= limMaxAttr && cardAttr3 >= limMinAttr && cardAttr3 <= limMaxAttr
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  handleClick = (event) => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardsDone, cardTrunfo } = this.state;

    event.preventDefault();

    const cart = {
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      rarity: cardRare,
      superTrunfo: cardTrunfo,
    };

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    this.setState({
      cardsDone: [...cardsDone, cart],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  checkRenderFilter = (arrRender) => (
    arrRender.map(
      (card) => (
        <div
          className="card-done"
          key={ card.name }
          id={ card.name }
        >
          <Card
            cardName={ card.name }
            cardDescription={ card.description }
            cardAttr1={ card.attr1 }
            cardAttr2={ card.attr2 }
            cardAttr3={ card.attr3 }
            cardImage={ card.image }
            cardRare={ card.rarity }
            cardTrunfo={ card.superTrunfo }
          />
          <button
            className="button-delete"
            type="button"
            onClick={ this.handleDeleteCLick }
            data-testid="delete-button"
          >
            Excluir
          </button>
        </div>
      ),
    ));

  callFunc = (event) => {
    this.handleChange(event);
    this.handleChangeFilter(event);
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, hasTrunfo, cardsDone, nameFilter, cardsFilter,
      rarityFilter, trunfoFilter } = this.state;

    return (
      <>
        <div className="preview-and-forms">
          <Form
            onInputChange={ this.handleChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.handleClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div>
          <label htmlFor="nameFilter">
            Filtros de busca
            <br />
            <input
              type="text"
              name="nameFilter"
              id="nameFilter"
              value={ nameFilter }
              data-testid="name-filter"
              onChange={ (event) => this.callFunc(event) }
            />
          </label>
          <label htmlFor="nameFilter">
            <select
              name="rarityFilter"
              id="rare-filter"
              data-testid="rare-filter"
              onChange={ (event) => this.callFunc(event) }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-filter">
            <input
              type="checkbox"
              name="trunfoFilter"
              id="trunfo-filter"
              data-testid="trunfo-filter"
              onChange={ (event) => this.callFunc(event) }
            />
            Super Trybe Trunfo
          </label>
        </div>
        <div className="all-cards">
          { !trunfoFilter && !nameFilter && (!rarityFilter || rarityFilter === 'todas')
            ? this.checkRenderFilter(cardsDone) : this.checkRenderFilter(cardsFilter) }
        </div>
      </>
    );
  }
}

export default App;
