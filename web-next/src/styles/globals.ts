import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.background};

    --webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1rem Inter, sans-serif;
    color: ${(props) => props.theme.white};
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 0;
  }
`
