import styled from "styled-components";

export const Container = styled.div`
    background-color :  whitesmoke;
    display: flex;
    justify-content : space-evenly;
    padding: 0.4%;
    height:20px;

    .link-ipag{
        text-decoration: none;
        text-align : center;
        width: 100px;
        font-size:20px;
        color: red;
        transition: 300ms;

        :hover{
            border-bottom: 0.1px solid red;
        }
    }

    .link-ipag-sel{
        text-decoration: none;
        text-align : center;
        width: 100px;
        font-size:20px;
        color: red;
        transition: 300ms;
        border-bottom: 2px solid red;
    }

`