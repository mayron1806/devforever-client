import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    justify-content: center;
    gap: 2rem;
`;
export const Input = styled.input.attrs({type: "text", placeholder: "Pesquisar"})`
    font-size: 1.6rem;
    font-weight: 400;
    width: 50%;
    max-width: 1000px;
    padding: 1rem 2rem;
    border-radius: 3rem;
    border: 2px solid var(--white);
    @media(max-width: 600px){
        width: 70%;
    }
`;

export const Button = styled.button<{mainColor: string}>`
    background: var(${props => props.mainColor});
    border: 0;
    border-radius: 3rem;
    width: 6.5rem;
    cursor: pointer;
    padding: .5rem;
    position: relative;

    ::before{
        content: url("/search.svg");
        position: absolute;
        width: 3rem;
        height: 3rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(80%);
    }
`;