import { NavLink } from "react-router-dom";
import styled from "styled-components";
const activeClassName = "active"

export const NavList = styled.ul`
background-color: teal;
list-style: none;
display: flex;
gap: 50px;
justify-content: center;
line-height: 1,5;
width: 100%;
margin: 0;
padding: 20px;
align-items: center;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
color: white;
text-decoration: none;
margin: 20px;

&.${activeClassName} {
    font-weight: bold;
    font-size: 110%;
}
`;
export const StyledItem = styled.li`
transition:1s;
&:hover{
    transform: scale(1.4);
    cursor: pointer;
    }
`;

