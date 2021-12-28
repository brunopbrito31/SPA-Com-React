import styled from "styled-components";

export const Container = styled.div`
   
    .campo-cards{
        
        width: 85%;
        margin: 0 auto;
        margin-top: 3%;
        display: flex;
        justify-content : space-evenly;
    }
    
    @media (min-width: 300px) and (max-width: 770px){

        
        .campo-cards{
            flex-wrap: wrap;
            
        }
    }

    @media (min-width: 1201px) and (max-width: 1300px){
        height:100%;
        
        .campo-cards{
            margin-top:2.5%;
            height:250px;
        }
    }
`