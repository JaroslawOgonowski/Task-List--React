import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    align-items: center;
    
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    };
`;
export const Button = styled.button`
    height: 50px;
    border: none;
    margin-left: 10px;
    background-color: teal;
    color: white;
    padding: 10px;
    margin: 10px;
    transition: 1s;
    
    &:hover{
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.05);
        cursor: pointer;
    };
    
    &:active{
        background-color: hsl(180, 100%, 35%);
    };
    
    @media (max-width: 767px) {
        width: 100%;
        margin: auto;
    };
`;
