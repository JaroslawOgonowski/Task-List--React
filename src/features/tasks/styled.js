import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
`;
export const StyledButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    
    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: auto;  
    }
`;
export const Button = styled.button`
    background-color: white;
    color: hsl(180, 100%, 25%);
    border: none;
    max-height: 40px;
    font-size: 15px;
    transition: color 0.5s;
   
    &:hover{
        color: hsl(180, 100%, 35%);
        cursor: pointer;
    }

    &:active{
        color: hsl(180, 100%, 45%);
        border: 1px solid black;
        margin: -1px;
    }

    &&{
        ${({ disabled }) => disabled && css`
        color: rgba(128, 128, 128, 0.39);
    `};
    };
`;

export const StyledLink = styled(Link)`
    color: teal;
    text-decoration: none;
    cursor: pointer;
    transition: 1s;
    &:hover{
        color:hsl(180, 100%, 35%);
};
`;