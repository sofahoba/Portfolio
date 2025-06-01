import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    margin: 0;
    padding: 0;
    transition: all 0.50s linear;
    line-height: 1.6;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.linkHover};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-weight: 600;
  }

  section {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Add more global styles as needed */
`;
