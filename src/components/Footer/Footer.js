import React from 'react'
import { FooterContainer, FooterSectionWrapper, FooterSection, FooterLinkSectionHeaders, FooterLinkItems } from './Footer.elements'

const Footer = () => {
    return (
        <>
            
            <FooterContainer>
                <FooterSectionWrapper>
                    <FooterSection>
                        <FooterLinkSectionHeaders>USING SHIPT</FooterLinkSectionHeaders>
                        <FooterLinkItems>Give a Gift</FooterLinkItems>
                        <FooterLinkItems>Help</FooterLinkItems>
                        <FooterLinkItems>Sign Up</FooterLinkItems>
                    </FooterSection>
                    <FooterSection>
                        <FooterLinkSectionHeaders>RESOURCES</FooterLinkSectionHeaders>
                        <FooterLinkItems>About Us</FooterLinkItems>
                        <FooterLinkItems>Partner With Us</FooterLinkItems>
                        <FooterLinkItems>Careers</FooterLinkItems>
                        <FooterLinkItems>Press/Media</FooterLinkItems>
                        <FooterLinkItems>Grocery Delivery</FooterLinkItems>
                        <FooterLinkItems>Sitemap</FooterLinkItems>
                    </FooterSection>
                    <FooterSection>
                        <FooterLinkSectionHeaders>COMMUNITY</FooterLinkSectionHeaders>
                        <FooterLinkItems>Get Paid to Shop</FooterLinkItems>
                        <FooterLinkItems>Blog</FooterLinkItems>
                        <FooterLinkItems>Contact Us</FooterLinkItems>
                        <FooterLinkItems>Trust and Safety</FooterLinkItems>
                    </FooterSection>
                    <FooterSection>
                        <FooterLinkSectionHeaders>POLICIES</FooterLinkSectionHeaders>
                        <FooterLinkItems>Do Not Sell My Personal Information</FooterLinkItems>
                        <FooterLinkItems>Privacy Policy</FooterLinkItems>
                        <FooterLinkItems>CA Privacy Rights</FooterLinkItems>
                        <FooterLinkItems>Interest-Based Ads</FooterLinkItems>
                        <FooterLinkItems>Terms of Service</FooterLinkItems>
                    </FooterSection>
                </FooterSectionWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer
