import styled from "styled-components";

export default styled.input`
    height: 50px;
    display: inline-block;
    padding: 10px;
    border-color: lightgray;
    border-style: solid;
    @media (max-width: 767px) {
        width: 100%;
    }
`;