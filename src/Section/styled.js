import styled, { css } from "styled-components";

export const SectionContainer = styled.section`
    margin: 10px 0;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 5px #ddd; 
`;

export const SectionHeader = styled.header`
    font-size: 14px;
    padding: 10px;
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
export const SectionTitle = styled.h2`
    @media (max-width: 767px) {
        width: 100%;
    }
`;
export const SectionContent = styled.div`
padding: 20px;
`;