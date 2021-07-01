import React, { Component } from 'react';
import { FiRotateCw } from 'react-icons/fi';
import image from '../../logo.png';
import { Conteiner, RodarButton, Header } from './styles';

export default class Camilida extends Component {
  constructor(props) {
    super(props);
    this.state = { rodar: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      rodar: !prevState.rodar,
    }));
  }

  render() {
    const { rodar } = this.state;
    return (
      <>
        <Header>
          <a href="/">Voltar</a>
        </Header>
        <Conteiner rodar={rodar}>
          <h1>
            <img src={image} className="photo" alt="Logo" />
          </h1>
          <h2>
            <RodarButton onClick={this.handleClick}>
              <FiRotateCw />
            </RodarButton>
          </h2>
        </Conteiner>
      </>
    );
  }
}
