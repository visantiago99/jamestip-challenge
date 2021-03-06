import { createGlobalStyle } from "styled-components"; 

export default createGlobalStyle`
  *{
    margin: 0,
    padding: 0,
    box-sizing: border-box;
  }

  body {
    background: #fafafa;
    width: 100%;
  }

  .formulary {
    display: flex;
    flex-direction: column;
    max-width: 220px;
    margin: 0 auto;
    padding: 12px;
    gap: 4px;
  }

  .formulary button {
    max-width: 120px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #00D0B3;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: #FFFFFF;
    border-radius: 20px 20px 20px 20px;
    color: #ffffff;
    padding: 12px 24px;
    font: 15px Robot, sans-serif;
  }

  .plist-link {
    max-width: 120px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #000000;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: #FFFFFF;
    border-radius: 20px 20px 20px 20px;
    color: #ffffff;
    padding: 12px 24px;
    font: 15px Robot, sans-serif;
  }

  .card-style {
    max-width: 18rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;