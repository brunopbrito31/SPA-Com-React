import styled from "styled-components";


export const  Container = styled.div`
    text-align: center;
    min-height: 75vh;

    #form-cadastro{
        background-color: whitesmoke;
        box-shadow: 2px 3px 4px red;
        width:38%;
        margin: 60px auto;
        opacity: 0.8;
        padding: 4% 0;
        h2{
            font-size:35px;
            color: red;
        }
        .campo-form{
            margin: 3% 0;
            font-size: 1.7em;
            color: red;
            input{
                width: 65%;
                font-size: 1.1em;
                text-align: center;
                color: red;
                border-color: red;
                background-color: whitesmoke;
                border-radius: 6px; 
            }
        }
        .submit-form{
            font-size: 30px;
            input{
                background-color:red;
                color:white;
                width: 45%;
                height: 40px;
                
                font-size: 1.1em;
                text-align: center;
                border-color: white;
                box-shadow: 2px 3px 4px red;
            }
        }

    }

    .cad-final{
        margin-top: 12%;
        color:red;
        font-size: 25px;
    }

    @media (min-width: 300px) and (max-width: 919px){
        display: grid;
        grid-template-rows: 2fr 3fr 2fr;
        #form-cadastro{
            margin: 0 auto;
            min-width: 100%;
            .campo-form{
                input{
                    width: 100%;
                }
            }
            .submit-form{
                margin-top: 7%;
            }
        }
    }


    @media (min-width: 920px) and (max-width: 1400px){
        margin: 0;
        padding: 0;
        #form-cadastro{
            margin-top:90px;
            min-width:75%;
        }
    }


    @media (min-width: 451px) and (max-width: 770px){
        
    }
       



`