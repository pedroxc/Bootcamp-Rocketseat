import React from 'react';
import { Link } from 'react-router-dom';
import { FaGrinHearts } from 'react-icons/fa';
import { Conteiner, Header, CamilaButton } from './styles';
import xuxus from '../../xuxus.jpeg';
import will from '../../will.png';

function Main() {
  return (
    <>
      <Header>
        <Link to="/curso">BootCamp</Link>
        <Link to="/renan">Renan</Link>

        <a href="https://www.facebook.com/profile.php?id=100001247365604">
          Facebook
        </a>
      </Header>
      <Conteiner>
        <h1>
          <CamilaButton>
            <Link to="/camilinda">
              <FaGrinHearts transform="scale(1.5)" />
            </Link>
          </CamilaButton>
        </h1>

        <h2>
          <img src={will} alt="will" className="will" />
          <img src={xuxus} alt="xuxus" className="xuxus" />
        </h2>
      </Conteiner>
    </>
  );
}

export default Main;
