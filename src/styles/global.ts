import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
    }
    html{
        font-family: 'Roboto', serif;
        font-size: 62.5%;
    }
    body{
        background: var(--white2);
    }
    :root{
        --black: #1E1E1E;
        --blue: #256767;
        --red: #6B3737;
        --purple: #672564;
        --white: #E5E5E5;
        --white2: #F5F5F5;
        --gray: #6B6B6B;
    }
`;