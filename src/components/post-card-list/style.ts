import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    display: grid;
    grid-auto-flow: dense;
    justify-content: space-between;
    grid-row-gap: 40px;
    grid-auto-rows: 400px;
    grid-template-columns: repeat(3, 30%);
    @media(max-width: 1200px){
        max-width: 1000px;
    }
    @media(max-width: 1000px){
        grid-template-columns: repeat(2, 47%);
        grid-auto-rows: 350px;
    }
    @media(max-width: 600px){
        grid-template-columns: repeat(1, 100%);
    }
`;