import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --navy: #001f3f;
    --blue: #0074d9;
    --aqua: #7fdbff;
    --teal: #39cccc;
    --olive: #3d9970;
    --green: #2ecc40;
    --lime: #01ff70;
    --yellow: #ffdc00;
    --orange: #ff851b;
    --red: #ff4136;
    --maroon: #85144b;
    --fuchsia: #f012be;
    --purple: #b10dc9;
    --black: #111111;
    --gray: #aaaaaa;
    --silver: #dddddd;
  }
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--navy);
    color: var(--lime);
    font-family: sans-serif;
  }

  a {
    color: var(--green);
    text-decoration: none;

    :active,
    :focus,
    :visited {
      color: var(--yellow);
    }

    :hover {
      text-decoration: underline;
    }
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <div id="dz-root" />
    </>
  )
}
