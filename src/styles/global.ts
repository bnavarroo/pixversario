import { createGlobalStyle, css } from 'styled-components';
import cssReset from './reset';

const GlobalStyle = createGlobalStyle`
  ${cssReset}

  body {
    ${({ theme }) => css`
      color: ${theme.colors.text.default};
      font-size: ${theme.fontSize};
      font-weight: ${theme.fontWeight};
    `};
    font-family: 'Montserrat', sans-serif;
  }

  header, footer {
    width: 100%;
  }
  input {
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.text.default};
  }
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;

export default GlobalStyle;
