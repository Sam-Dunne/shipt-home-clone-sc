import styled, { createGlobalStyle } from "styled-components/macro";
import { device } from './device';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    } 
    
    html, body {
    max-width: 100%;
    overflow-x: hidden;
}

`;


export const Container = styled.div`
    z-index: 1;
    width: 100%;
`;

export const Section = styled.section`
    padding-top: 50px;
    position: relative;
    `;

export const Button = styled.button`
    align-self: center;
    border-radius: 4px;
    background: ${({ primary }) => (primary ? '#4B59f7' : 'transparent')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '0.1rem 2.8rem')};
    color: rgb(56, 47, 64);
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '0.8rem')};
    font-weight: 800;
    outline: none;
    border: solid;
    height: 2.5rem;
    border-color: rgb(56, 47, 64);
    border-radius: 10px;
    border-width: 1px;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({ primary }) => (primary ? '#0467FB' : 'rgb(36, 18, 57)')};
        color: #fff
    }

    @media screen and (max-width: 768px) {
        color: #fff;
        border-color: #fafafa;
        padding: 0 2rem;
        margin-bottom: 15px;
    }
`;

export const HeroH1 = styled.h1`
    font-family: 'Playfair Display', serif;
    letter-spacing: 0.1rem;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 1.1;
    max-width: 311px;
    margin: 20px auto;

    @media ${device.tablet} {
        font-size: 3.5rem;
        max-width: 800px;
        margin: 20px 0;
    }
`;

export const HeroH3 = styled.h6`
    font-size: 1.1rem;
    font-weight: 200;
    line-height: 1.1;
    margin-top: 30px;
    max-width: 311px;
    margin: 25px auto;

    @media ${device.tablet} {
        
        max-width: 800px;
        margin: 25px 0;
    }
`;

export default GlobalStyle;