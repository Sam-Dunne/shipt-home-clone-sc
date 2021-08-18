import React, { useState } from 'react';
import { FaTimes, FaGripLines } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyle';
import { Nav, NavbarContainer, NavLogo, MobileBurger, NavMenu, NavItem, NavLinks } from './Navbar.elements';




const Navbar = ({ isOpen }) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <IconContext.Provider value={{ color: '#black' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo src='https://druven30vo903.cloudfront.net/shipt/web/assets/headerLogo-new.svg'>
                        </NavLogo>
                        {click ?
                            <MobileBurger isOpen onClick={handleClick}>
                                {click ? <FaTimes /> : <FaGripLines />}
                            </MobileBurger> :
                            <MobileBurger onClick={handleClick}>
                                {click ? <FaTimes /> : <FaGripLines />}
                            </MobileBurger>}
                        
                        <NavMenu click={click}>
                            <NavItem>
                                <NavLinks to='/' onClick={handleClick}>Get paid to shop</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/resume' onClick={handleClick}>Corona Virus Updates</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/projects' onClick={handleClick}>Cities</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/resume' onClick={handleClick}>Stores</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/resume' onClick={handleClick}>Services</NavLinks>
                            </NavItem>

                            <Button onClick={handleClick}>Log in</Button>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
