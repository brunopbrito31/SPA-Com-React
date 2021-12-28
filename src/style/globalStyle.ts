import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body{
        height: 100%;
    }
    .app{
        height: 100%;
        width: 100%;
        position: absolute;
        display: grid;
        grid-template-rows: 15vh 73vh 12vh;
        
        @media (min-width: 300px) and (max-width: 770px){
            display: grid;
            grid-template-rows: 2fr 3fr 2fr;
        }
        @media (min-width: 920px) and (max-width: 1400px){
            flex-direction: column;
        }
        
        
    }

`