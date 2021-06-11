import React from 'react';
import { Link } from 'react-router-dom';
import { FaGrinHearts } from 'react-icons/fa';
import { Conteiner, Header, CamilaButton } from './styles';

function Main() {
  return (
    <>
      <Header>
        <a href="/Curso">BootCamp</a>
        <a href="/renan">Renan</a>
        <a href="https://www.facebook.com/profile.php?id=100001247365604">
          Facebook
        </a>
      </Header>
      <Conteiner>
        <h1>
          <CamilaButton>
            <Link to="/renan">
              <FaGrinHearts transform="scale(1.5)" />
            </Link>
          </CamilaButton>
        </h1>
      </Conteiner>
    </>
  );
}

export default Main;
