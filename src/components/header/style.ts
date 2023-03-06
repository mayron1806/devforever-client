import Link from "next/link";
import styled, { css } from "styled-components";

export const Container = styled.header<{direction: "up" | "down"}>`
    position: sticky;
    top: ${props => props.direction == "up" ? "0%" : "-100%"};
    transition: .5s;
    display: flex;
    width: 100%;
    background-color: var(--white2);
    justify-content: space-between;
    padding: 1rem 10rem;
    border-bottom: 1px solid var(--white);
    @media(max-width: 1000px){
        padding: 1rem;
    }
    z-index: 100;
`;
export const LogoContainer = styled.div`
    position: relative;
    height: 22px;
    width: 200px;
`;
export const Main = styled.div`
    display: flex;
    gap: 3rem;
`;
/* MENU ==========================================================*/
export const Menu = styled.div<{active: boolean}>`
    display: flex;
    gap: 3rem;
    @media(max-width: 1000px){
        gap: 2rem;
    }
    @media(max-width: 800px){  
        position: absolute;
        width: 100vw;
        top:-100vh;
        left:0;
        height: 100vh;
        background: var(--blue);
        flex-direction: column;
        z-index: 100;
        align-items: center;
        justify-content: space-evenly;
        transition: .2s;
        ${props => props.active && "top: 0;"}
    }
`;
const activeMenu = () => {
    return css`
        & > :nth-child(1){
            transform: rotate(45deg) translate(7px,8px);
        }
        & > :nth-child(2){
            opacity: 0;
        }
        & > :nth-child(3){
            transform: rotate(-45deg) translate(9px,-9px);
        }
    `;
}
export const MenuToggle = styled.div<{active: boolean}>`
    cursor: pointer;
    width: 4rem;
    height: 100%;
    position: relative;
    transition: .2s;
    z-index: 101;
    
    & > span{
        position: absolute;
        width: 100%;
        height: .5rem;
        border-radius: 1rem;
        background: var(${props => props.active ? "--white" : "--black"});
        transition: .2s;    
    }
    & > :nth-child(1){
        top: -15%;
    }
    & > :nth-child(2){
        top: 50%;
        transform: translateY(-50%);
    } 
    & > :nth-child(3){
        bottom: -15%;
    } 
    ${props => props.active && activeMenu()}
    @media(min-width: 800px){
        display: none;
    }
`;
const activeItemMenu = () => {
    return css`
        ::before{
            width: 100%;
        }
    `;

}
export const ItemMenu = styled(Link)<{route: string}>`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--black);
    position: relative;
    ::before{
        content: "";
        position: absolute;
        width: 0;
        left: 50%;
        transform: translateX(-50%);
        height: .5rem;
        background: var(--black);
        bottom: -1rem;
        transition: .3s;
    }
    &:hover{
        ::before{
            width: 100%;
        }
    }
    ${props => props.href === props.route && activeItemMenu()}
    @media(max-width: 800px){
        color: var(--white);
        ::before{
            background: var(--white);
        }
    }
`;


/* THEME ==========================================================*/
const themeHandle = (dark: boolean) => {
    return css`
        background:  var(${dark ? "--black": "--white"});
        ::before{
            background: var(--white2);
            content: url(${dark ? "moon.svg": "sun.svg"});
            display: flex;
            justify-content: center;
            align-items: center;
            transition: .2s;
            ${
                dark ?
                    "transform: translate(115%, -50%) rotate(360deg);"
                :
                    "transform: translate(0%, -50%) rotate(0deg);"
            }
        }
    `;
}
export const Theme = styled.div<{dark: boolean}>`
    cursor: pointer;
    width: 5.5rem;
    height: 2.7rem;
    border-radius: 4rem;
    transition: 0.2s;
    position: relative;
    ::before{
        content: "";
        position: absolute;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        top: 51%;
    }
    ${props => themeHandle(props.dark)}
`;