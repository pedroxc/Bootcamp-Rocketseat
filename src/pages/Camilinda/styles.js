import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }


`;

export const Conteiner = styled.div.attrs(() => ({}))`
  padding: 30px;
  margin: 80px auto;
  .photo {
    height: 300px;
    width: 300px;

    &${(props) => !props.rodar} {
      animation: ${rotate} 2s linear infinite;
    }
  }
`;
export const RodarButton = styled.button`
  align-items: center;
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
