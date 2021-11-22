import React from 'react';
import { Container } from './styles';
import JamesTipLogo from '../../images/JamesTipLogo.png'

const Header: React.FC = () => {
  return (
    <Container>
      <img src={JamesTipLogo} alt="logo"/>
      <div className="social-links">
        <button>Login</button>
        <button className="quero-faturar">Quero faturar mais</button>
      </div>
    </Container>
  );
}

export default Header;