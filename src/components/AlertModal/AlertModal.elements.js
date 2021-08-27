import styled from 'styled-components/macro';
import { device } from '../../device';

export const AlertModalContainer = styled.div`
    z-index: ${props => props.toggle ? "9999" : "-100" };
    opacity: ${props => props.toggle ? "1" : "0"};
    /* z-index: 999; */
    position: fixed;
    top: 20%;
    left: 0;
    right:0;
    margin: 0 auto;
    min-height: 100px;
    height: fit-content;
    /* width: fit-content; */
    width: 75vw;
    padding: 10px;
    background: rgb(201, 201, 201);
    box-shadow: 1px -3px 24px 0px rgba(207,52,52,0.8);
    -webkit-box-shadow: 1px -3px 24px 0px rgba(207,52,52,0.8);
    -moz-box-shadow: 1px -3px 24px 0px rgba(207,52,52,0.8);
    transition: 
        box-shadow 200ms ease-in-out 200ms,
        opacity 600ms ease-in-out 200ms,
        z-index 0ms linear 100ms;
    border-radius: 25px;
    text-decoration: none;

    @media ${device.tablet} {
        width: fit-content;
        min-height: 100px;
        height: fit-content;
        min-width: 350px;
        padding: 10px;
    }

    @media ${device.laptop} {
        width: 350px;
    }
   
    
    &:hover {
        
        /* background: rgb(14, 105, 83); */
        box-shadow: 1px -3px 24px 8px rgba(14,105,83,0.8);
-webkit-box-shadow: 1px -3px 24px 8px rgba(14,105,83,0.8);
-moz-box-shadow: 1px -3px 24px 8px rgba(14,105,83,0.8);
        cursor: pointer;
        text-decoration: none;
    }
`;

export const Alert_Modal__CardTitle = styled.h4`
    position: relative;
    width: fit-content;
    padding: 10px 16px;
    background: #fafafa;
    margin: 0 auto 8px auto;
    border-radius: 18px;
    text-align: center;
    font-weight: 600;

    @media ${device.tablet} {
        font-size: 1.3rem
    }
`;


export const Alert_Modal__CardBody = styled.h4`
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
`;
