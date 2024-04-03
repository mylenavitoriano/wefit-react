"use client"
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`

    :root {
        --primary: #2F2E41;
        --white: #FFF;
        --black: #333;
        --blue: #009EDD;
        --green-button: #039B00;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color: var(--white);
    }

    body{
        background-color: var(--primary);
        height: 100%;
        color: var(--white);

        .page{
            padding: 0 1rem 2rem;
            margin: 0 auto;

            @media (min-width: 68.75rem) {
                max-width: 67.5rem;
            }
        }
    }

    
`;

export const GlobalStyles = () => {
    return <Globals />;
  };