import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: var(--blue);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
`;
export const Image = styled.img`
    height: 70%;
`;
export const IconContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 60px;
    height: 60px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--red);
`;
export const Content = styled.div`
    position: relative;
    background: var(--white2);
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;
export const Title = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    @media(max-width: 800px){
        font-size: 1.6rem;
    }
`;