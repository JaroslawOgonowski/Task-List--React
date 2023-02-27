import styled from "styled-components";

export const AuthorText = styled.div`
line-height: 1.5;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Paragraph = styled.p`
margin-top: 50px;
transition: 1s;
    &:hover{
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.05);
        cursor: pointer;
    }
`;

export const MyPage = styled.a`
text-decoration: none;
    background-color: teal;
    color: white;
    padding: 20px;
    &:active{
        background-color: hsl(180, 100%, 35%);
    }
    @media (max-width: 767px) {
        width: 100%;
        margin: auto;
    }
`;