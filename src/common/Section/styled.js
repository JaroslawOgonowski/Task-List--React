import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 5px #ddd; 
`;

export const Header = styled.header`
    font-size: 12px;
    padding: 20px;
    margin: 0;
    border-bottom: 1px solid #ddd;
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-gap: 10px;
    align-items: center;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;
export const Title = styled.h2`
    @media (max-width: 767px) {
        width: 100%;
    }
`;
export const Content = styled.div`
    padding: 20px;
`;