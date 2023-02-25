import styled from "styled-components";

export const AuthorText = styled.div`
line-height: 1.5;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const MyPage = styled.a`
text-decoration: none;
border: 2px solid teal;
color: teal;
padding: 20px;
font-weight: 700;
transition: 1s;
&:hover{
    transform: scale(1.2);
    cursor: pointer;
}

`