import styled, { css, keyframes } from "styled-components";

export const Container = styled.div<{mainColor: string}>`
    width: 100vw;
    height: 100vh;
    background: ${props => props.mainColor};  
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const DotContainer = styled.div`
    width: 100%;
    height: 10px;
    display: flex;
    gap: 2rem;
    justify-content: center;
`;
const dotMoveAnim = keyframes`
    0%{
        transform: translateY(0&);
        background: var(--red);   
    }  
    40%{
        transform: translateY(-30px);
        background: var(--blue);
    }
    100%{
        transform: translateY(0&);
        background: var(--purple);
    }
`;
export const Dot = styled.div<{index: number}>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--white);
    animation: ${dotMoveAnim} 1s infinite ease-in;
    animation-delay: ${props => `${props.index * .15}s`};
    @media(max-width: 600px){
        width: 15px;
        height: 15px;
        
    }
`;