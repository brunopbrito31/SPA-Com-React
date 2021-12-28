import styled from "styled-components";

export const Card = styled.div`
    background-color: whitesmoke;
    box-shadow: 2px 3px 4px black;
    text-align: center;
    width: calc(100%/3 - 8%);
    opacity: 0.9;
    margin: 0 10px;
    
    
    img {
        width: 100%;
        height: 60%;
    }

    .ft-card{
        margin-top: 28px;
    }

    .card-title{
        font-size:0.8em;
        height: 70px;
    }
    
    @media (min-width: 300px) and (max-width: 770px){
        font-size: 0.9em;
        width: calc(100%);
        margin: 3%;
    }

    @media (min-width: 300px) and (max-width: 480px){
        
        .card-title{
            height:22%;
            text-align:center;
        }
        .ft-card{
        margin-top: 8px;
    }
        
    }

    @media (min-width: 771px) and (max-width: 919px){
        width: calc(100%);
        margin: 0.8%;
        font-size: 1em;
        height: 60vh;

        img {
            height:55%
        }
        .card-title{
            height:20%;
            text-align:center;
        }
    }

    @media (min-width: 920px) and (max-width: 1400px){
        
        height: 48vh;
        width: calc(100%/3 - 1.7%);
        font-size: 16px;
        margin-top: 3vh;
        img {
            height:55%
        }
        .card-title{
            height:17%;
            text-align:center;
            font-size: 0.67em;
        }

    }
`