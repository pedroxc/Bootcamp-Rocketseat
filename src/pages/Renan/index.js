import React, { Component } from 'react';
import renan from '../../renan.jpeg';
import hair from '../../hair.png';
import {
  RenanWarpper,
  Conteiner,
  HairWarpper,
  MoveButton,
  Header,
} from './styles';

export default class Renan extends Component {
  constructor(props) {
    super(props);
    this.state = { moveHair: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      moveHair: !prevState.moveHair,
    }));
  }

  render() {
    const { moveHair } = this.state;
    return (
      <>
        <Header>
          <a href="/">Voltar</a>
        </Header>
        <Conteiner>
          <HairWarpper cabeloMover={moveHair}>
            <img src={hair} className="photo" alt="hair" />
          </HairWarpper>
          <RenanWarpper>
            <h1>
              <img src={renan} alt="renan" className="image" />
            </h1>
            <h2>
              <MoveButton onClick={this.handleClick}>
                I need some healing
              </MoveButton>
            </h2>
          </RenanWarpper>
        </Conteiner>
      </>
    );
  }
}
