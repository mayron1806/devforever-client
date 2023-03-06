import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    display: grid;
    grid-auto-flow: dense;
    justify-content: space-around;
    grid-row-gap: 20px;
    grid-gap: 20px;
    grid-auto-rows: 350px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    @media(max-width: 1200px){
        max-width: 90vw;
    }
`;