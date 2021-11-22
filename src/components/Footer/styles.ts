import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: rgb(16, 16, 16);
  color: #FFF;
  display: flex;
  align-items: center;
  padding: 0 5px;
  justify-content: space-between;
  bottom: 0;
  position: fixed;
  min-width: 100%;

  .social-links {
    display: flex;
    justify-content: space-between;
    gap: 12px
  }

  button {
    background-color: #000000;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: #FFFFFF;
    border-radius: 20px 20px 20px 20px;
    color: #ffffff;
    padding: 12px 24px;
    font: 15px Robot, sans-serif;
  }

  .quero-faturar{
    background-color: #00D0B3;
    color: #000000;
  }
`;