import styled from 'styled-components/macro';
import { device } from '../../device';
import { Container } from '../../globalStyle';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
background: #ffffff;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
top: 0;
z-index: 998;
box-shadow: rgb(0 0 0 / 10%) 0px 2px 10px 0px;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    height: 60px;
    ${Container}

    @media ${device.tablet} {  
      padding: 0 80px;   
    }
    @media ${device.laptopL} {
      display: flex;   
      position: relative; 
      width: 1080px; 
      padding-left: 0;
      padding-right: 0;
    }
`;

export const NavLogo = styled.img`
    cursor: pointer;
    align-self: center;
    min-height: 32px;
    max-height: 36px;
    margin-right: 10px;

    @media screen and (max-width: 768px) {
        display: flex;
        
    }
`;

export const MobileBurger = styled.div`
    display: none;
    z-index: 999;

    @media screen and (max-width: 768px) {
        display: inline-block;
        transition: all 2s ease;
        font-size: 2rem;
        cursor: pointer;
        height: 30px;
        align-self: center;
        border-radius: 10px;
        background-color: ${props => props.isOpen ? '#fff' : 'transparent'};
    } 
`;

export const NavMenu = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        display: ${({click}) => (click ? 'flex' : 'none')};
        flex-direction: column-reverse;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: -55%;
        right: 0;
        z-index: ${({click}) => (click ? 998 : 0)};
        background: ${({click}) => (click ? 'rgb(36, 18, 57)' : '#fff' )};;
    }
`;

export  const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    padding: 0px 1em;
    
    &:hover {
        border-bottom: 2px solid #4b59f7;
    }

    @media screen and (max-width: 768px) {
        width: 100%;

        &:hover {
            border: none;
        }

    }
`;

export const NavLinks = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    font-size: 1rem;
    text-decoration: none;
    padding: 0.5rem 0;
    height: 100%;
    font-weight: 700;
    font-size: 0.9rem;
    &:hover {
       
    }

    @media screen and (max-width: 768px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        color: #fff;

        &:hover {
            color: green;
            transition: all 0.3s ease;
        }
    }
`;
