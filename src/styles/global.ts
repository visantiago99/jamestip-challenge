import { createGlobalStyle } from "styled-components"; 

export default createGlobalStyle`
  *{
    margin: 0,
    padding: 0,
    box-sizing: border-box;
  }

  body {
    background: #fafafa;
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

`;