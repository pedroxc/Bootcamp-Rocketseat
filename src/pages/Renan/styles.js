import styled, { keyframes } from 'styled-components';

const move = keyframes`
0% {
  position: relative;
  left: 1vw;

  }
  100% {
    position: relative;
    left: 100vw;
  }


`;

export const Conteiner = styled.div`
  display: flex;
  height: 80vh;
  width: 80vw;
  .image {
    height: 60vh;
  }
`;
export const HairWarpper = styled.div.attrs(() => ({}))`
  z-index: 2;
  width: 33vw;

  .photo {
    height: 35vh;

    animation: ${move} 2s linear infinite;
    &${(props) => !props.cabeloMover} {
      animation-play-state: paused;
    }
  }
`;

export const RenanWarpper = styled.div`
  z-index: 1;
  padding-top: 5vw;
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const MoveButton = styled.button`
  background: #191a70;

  margin-top: 15px;
  width: 150px;
  height: 50px;
  border-radius: 15px;
  font-size: 18px;
  color: black;
  font-weight: bold;
`;
export const Header = styled.div`
  align-items: center;
  display: flex;
  padding: 30px;
  border: 2px;

  a {
    background: rgb(14, 51, 181);
    border: 1px solid #000;
    border-radius: 4px;

    text-decoration: none;
    color: black;
    margin: auto;
    min-width: 65px;
    max-width: 100px;
    text-align: center;
  }
`;
