import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--text);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Arial, 'Helvetica Neue', sans-serif;
  }

  html {
    background: var(--primary);
  }

  :root {
    --primary: ${props => props.theme.colors.primary};
    --secondary: ${props => props.theme.colors.secondary};
    --text: ${props => props.theme.colors.text};
    --search: ${props => props.theme.colors.search};
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: ${props => props.theme.colors.outline};
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: ${props => props.theme.colors.twitterDarkHover};
    --twitter-light-hover: ${props => props.theme.colors.twitterLightHover};
  }
`;
