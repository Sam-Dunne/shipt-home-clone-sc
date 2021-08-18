import React from 'react'
import { HeroContainer, Input, ActionBtn, HeroImage } from './Hero.elements';
import Fade from 'react-reveal/Fade';
import { HeroH1, HeroH3 } from '../../globalStyle';

const Hero = () => {
    return (
        <>
            <HeroContainer>
                <HeroH1>Get the things you need from stores you trust.</HeroH1>
                <HeroH3>Order everything from groceries to household essentials for delivery to your door.</HeroH3>
                <Input placeholder='Enter Zip Code' ></Input>
                <ActionBtn>Get started</ActionBtn>
                <HeroImage src='https://www.shipt.com/_next/image?url=https%3A%2F%2Fdruven30vo903.cloudfront.net%2Fshipt%2Fweb%2Fassets%2Fmarketing-hero.jpg&w=1080&q=75'></HeroImage>
            </HeroContainer>
            <Fade>
                <HeroContainer>
                    <HeroH1>Get the things you need from stores you trust.</HeroH1>
                    <HeroH3>Order everything from groceries to household essentials for delivery to your door.</HeroH3>
                    <Input placeholder='Enter Zip Code' ></Input>
                    <ActionBtn>Get started</ActionBtn>
                    <HeroImage src='https://www.shipt.com/_next/image?url=https%3A%2F%2Fdruven30vo903.cloudfront.net%2Fshipt%2Fweb%2Fassets%2Fmarketing-hero.jpg&w=1080&q=75'></HeroImage>
                </HeroContainer>
            </Fade>
            <Fade>
                <HeroContainer>
                    <HeroH1>Get the things you need from stores you trust.</HeroH1>
                    <HeroH3>Order everything from groceries to household essentials for delivery to your door.</HeroH3>
                    <Input placeholder='Enter Zip Code' ></Input>
                    <ActionBtn>Get started</ActionBtn>
                    <HeroImage src='https://www.shipt.com/_next/image?url=https%3A%2F%2Fdruven30vo903.cloudfront.net%2Fshipt%2Fweb%2Fassets%2Fmarketing-hero.jpg&w=1080&q=75'></HeroImage>
                </HeroContainer>
            </Fade>

        </>
    )
}

export default Hero
