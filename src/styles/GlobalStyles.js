import { createGlobalStyle, keyframes } from "styled-components";
import { lightTheme } from "./theme";

// Keyframes for the animated gradient
const animatedGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color 0.50s linear, color 0.50s linear;
    line-height: 1.6;

    /* Apply animated gradient based on theme */
    ${({ theme }) =>
      theme.body === lightTheme.body
        ? `background-image: linear-gradient(-45deg, #e0eafc, #cfdef3, #e0eafc, #cfdef3);`
        : `background-image: linear-gradient(-45deg, #0D1117, #161B22, #010409, #161B22);`}
    background-size: 400% 400%;
    animation: ${animatedGradient} 30s ease infinite;
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
    background-color: ${({ theme }) => theme.background};
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0,0,0,0.05);
    margin-bottom: 20px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Add more global styles as needed */
`;
