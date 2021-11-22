import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: rgb(16, 16, 16);
  color: #FFF;
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
  bottom: 0;
  position: fixed;
  min-width: 100%;
  min-height: 220px;

  .logo-hero h2 {
    color: #00D0B3;
  }

  .about h2 {
    color: #00D0B3;
  }

  .contact {
    margin-right: 30px;
  }

  .contact h2 {
    color: #00D0B3;
  }
`;