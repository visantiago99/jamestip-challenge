import React from 'react';
import { Container } from './styles';
import JamesTipLogo from '../../images/JamesTipLogo.png'

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="logo-hero">
        <img src={JamesTipLogo} alt="logo"/>
        <h2>Pronto para faturar mais?</h2>
        <h3>comercial@jamestip.com</h3>
        <h3>+55 51 99102 9289</h3>
      </div>
      <div className="about">
        <h2>Sobre nós</h2>
        <h3>Nossa plataforma</h3>
        <h3>Cases</h3>
        <h3>Blog</h3>
      </div>
      <div className="contact">
        <h2>Fale conosco</h2>
        <h3>Contato</h3>
      </div>
    </Container>
  );
}

export default Footer;