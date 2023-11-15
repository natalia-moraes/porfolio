import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 100%; 
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
    }

    body {
        font-family: source sans pro, helvetica neue, Arial, Helvetica, sans-serif;
        background-color: #0c0c1d;
        color: lightgray;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`

export {
    GlobalStyle
}