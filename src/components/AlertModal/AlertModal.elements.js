import styled from 'styled-components/macro';
import { device } from '../../device';

export const AlertModalContainer = styled.div`
    z-index: ${props => props.toggle ? "9999" : "-100" };
    opacity: ${props => props.toggle ? "1" : "0"};
    
    position: fixed;
    top: 8%;
    left: 0;
    right:0;
    margin: 0 auto;
    min-height: 100px;
    height: fit-content;
    width: 75vw;
    padding: 10px;
    background: rgb(201, 201, 201);
    box-shadow: 6px -6px 10px -3px rgba(141,25,49,0.83);
-webkit-box-shadow: 6px -6px 10px -3px rgba(141,25,49,0.83);
-moz-box-shadow: 6px -6px 10px -3px rgba(141,25,49,0.83);
    transition: 
        box-shadow 200ms ease-out 100ms,
        opacity 600ms ease-in-out 200ms,
        z-index 0ms linear 100ms,
        transform 100ms linear;
        background: 50ms ease;
    border-radius: 25px;
    text-decoration: none;

    @media ${device.tablet} {
        width: fit-content;
        min-height: 100px;
        height: fit-content;
        min-width: 350px;
        padding: 18px;
    }

    @media ${device.laptop} {
        width: 350px;
    }
   
    &:hover {
        box-shadow: -5px 6px 10px -3px rgba(3,135,103,0.83);
-webkit-box-shadow: -5px 6px 10px -3px rgba(3,135,103,0.83);
-moz-box-shadow: -5px 10px 10px -3px rgba(3,135,103,0.83);
        cursor: pointer;
        text-decoration: none;
        transform: scale(0.98);
        background: rgb(135, 135, 135);
    }
`;

export const AlertModalFlexWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 12fr 1fr;
    grid-template-rows: 1fr;
    margin-bottom: 15px;
`;

export const AlertModalCardTitle = styled.h4`
    padding: 10px 16px;
    background: #fafafa;
    margin: 0 auto 8px auto;
    border-radius: 18px;
    text-align: center;
    font-weight: 600;

    @media ${device.tablet} {
        font-size: 1.3rem
    }

    @media ${device.laptop} {
        font-size: 1.5rem;
    }
`;


export const AlertModalCardBody = styled.h4`
    position: relative;
    text-align: center;
    width: 80%;
    min-height: fit-content;
    padding: 10px;
    font-weight: 300;
    background: #fafafa;
    margin: 0 auto 0 auto;
    border-radius: 18px;
    
    @media ${device.tablet} {
        font-size: 1.3rem;
        width: 90%;
    }

    @media ${device.laptop} {
        font-size: 1.5rem;
    }
`;

export const SVG_WRAPPER = styled.span`
    display: flex;
    justify-content: start;
`;
