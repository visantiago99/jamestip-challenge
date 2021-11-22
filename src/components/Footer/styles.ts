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
  margin-top: 15rem;
  position: relative;
  min-width: 100%;
  height: 100%;
  
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

  .links {
    font-size: 27px;
  } 

  @media (min-width: 860px) {
    .about {
      margin-right: 10rem;
    }
  }
`;