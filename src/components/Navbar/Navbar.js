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
                        
                        <NavMenu  onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>Get paid to shop</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/resume'>Corona Virus Updates</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/projects'>Cities</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/resume'>Stores</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/resume'>Services</NavLinks>
                            </NavItem>

                            <Button>Log in</Button>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
