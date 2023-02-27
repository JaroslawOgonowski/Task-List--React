import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding-left: 0px;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 10px;
    grid-gap: 10px;
    border-bottom: 1px solid #ddd;
    align-items: center;
    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: rgb(2, 92, 2);

    &:hover {      
        background-color: rgb(8, 128, 8);
        cursor: pointer;
    }
    &:active {
        border: 3px solid black;
        background-color: rgb(24, 173, 24);    
    }
    `}

    ${({ remove }) => remove && css`
        background-color: rgb(192, 3, 3);

    &:hover {
        background-color: red;
        cursor: pointer;
    }
    &:active {
        background-color: rgb(245, 40, 40); 
    }
    `}  
`;