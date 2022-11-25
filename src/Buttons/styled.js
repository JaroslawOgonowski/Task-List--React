import styled, { css } from "styled-components";

export const ButtonsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
`;
export const Button = styled.button`
    background-color: white;
    color: hsl(180, 100%, 25%);
    text-align: center;
    border: none;
    max-height: 40px;
    font-size: 15px;
    transition: color 0.5s;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        }

    &:hover{
        color: hsl(180, 100%, 35%);
        cursor: pointer;
    }

    &:active{
        color: hsl(180, 100%, 45%);
        border: 1px solid black;
        margin: -1px;
    }
    
    ${({ disabled }) => disabled && css`
        color: rgba(128, 128, 128, 0.39);
    `}
`;