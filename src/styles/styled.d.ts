import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      text: string;
      outline: string;
      search: string;
      twitter: string;
      twitterDarkHover: string;
      twitterLightHover: string;
    }
  }
}