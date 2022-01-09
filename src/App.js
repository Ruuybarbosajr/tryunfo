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
    };
  }

  // checkTrunfo = () => {
  //   const { cardsDone } = this.state;
  //   this.setState({
  //     hasTrunfo: cardsDone.some((cards) => cards.superTrunfo),
  //   });
  // }

  handleDeleteCLick = ({ target }) => {
    const { cardsDone } = this.state;
    this.setState({
      cardsDone: cardsDone.filter((card) => card.name !== target.parentNode.id),
    }, () => this.setState((prevState) => ({
      hasTrunfo: prevState.cardsDone.some((cards) => cards.superTrunfo),
    })));
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      this.checkButton,
    ); // a setStage está recebendo outro parâmetro, uma callback que é chamada após setar no estado, garantindo que a verificação ocorre após a mudança.
  };

  checkButton = () => {
    const maxAllAttr = 210;
    const limMaxAttr = 90;
    const limMinAttr = 0;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxAllAttr
      && cardAttr1 >= limMinAttr
      && cardAttr1 <= limMaxAttr
      && cardAttr2 >= limMinAttr
      && cardAttr2 <= limMaxAttr
      && cardAttr3 >= limMinAttr
      && cardAttr3 <= limMaxAttr
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  handleClick = (event) => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardsDone,
      cardTrunfo,
    } = this.state;

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
      isSaveButtonDisabled,
      hasTrunfo,
      cardsDone,
    } = this.state;

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
        <div className="all-cards">
          { cardsDone.map(
            ({
              name,
              description,
              attr1,
              attr2,
              attr3,
              image,
              rarity,
              superTrunfo,
            }) => (
              <div
                key={ name }
                id={ name }
              >
                <Card
                  cardName={ name }
                  cardDescription={ description }
                  cardAttr1={ attr1 }
                  cardAttr2={ attr2 }
                  cardAttr3={ attr3 }
                  cardImage={ image }
                  cardRare={ rarity }
                  cardTrunfo={ superTrunfo }
                />
                <button
                  type="button"
                  onClick={ this.handleDeleteCLick }
                  data-testid="delete-button"
                >
                  Excluir
                </button>
              </div>
            ),
          ) }
        </div>
      </>
    );
  }
}

export default App;
