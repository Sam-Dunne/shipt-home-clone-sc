import React, { useState, useRef, useEffect } from 'react'
import { HeroContainer, Input, ActionBtn, HeroImage, GridDataWrapper, DataItemWrapper, DataH1, DataTitle, DataH3 } from './Hero.elements';
import Fade from 'react-reveal/Fade';
import { HeroH1, HeroH3 } from '../../globalStyle';

const Hero = () => {
    const inputRef = useRef();

    const [countryName, setCountryName] = useState('');
    const handleInputOnChange = (e) => setCountryName(e.target.value);

    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleSubmitCountryName = (e) => {
        e.preventDefault();
        //
        if (!countryName) {
            alert(`User Input is Required`);
            // alert.preventDefault();
            inputRef.current.focus();
            return
        }
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.status)
                if (data.status === 404) {
                    alert(`Please check your spelling. Error ${data.status} ${data.message}`);
                    setCountryName('');
                    // setCountryData(null)
                    inputRef.current.focus();
                    return;
                }
                setCountryData(data[0]);
                setCountryName('');
            })
    }

    return (
        <>
            <HeroContainer>
                <HeroH1 gridArea>Get the things you need from stores you trust.</HeroH1>
                <HeroH3>Order everything from groceries to household essentials for delivery to your door.</HeroH3>
                <br></br>
                <HeroH3>This Input fetches Web API data for Countries, and displays responsively styled with CSS Grid, and has input and response validation (not pretty, but gets the idea across), and utilizes hooks useState, useEffect, useRef.</HeroH3>
                <Input type='text' placeholder='Search for Country Data' ref={inputRef} value={countryName} onChange={handleInputOnChange}></Input>
                <ActionBtn onClick={handleSubmitCountryName}>Get Info</ActionBtn>
                {countryData &&
                    <>
                        <Fade>
                            <DataH1>{countryData?.name}</DataH1>
                            <GridDataWrapper>
                                <DataItemWrapper>
                                    <DataTitle>Capitol</DataTitle>
                                    <DataH3>{countryData?.capital}</DataH3>
                                </DataItemWrapper>
                                <DataItemWrapper>
                                    <DataTitle>Population</DataTitle>
                                    <DataH3>{countryData?.population.toLocaleString("en-US")} </DataH3>
                                </DataItemWrapper>
                                <DataItemWrapper>
                                    <DataTitle>Currency</DataTitle>
                                    <DataH3>{countryData?.currencies[0]?.name}</DataH3>
                                </DataItemWrapper>
                                <DataItemWrapper>
                                    <DataTitle>Subregion</DataTitle>
                                    <DataH3>{countryData?.subregion}</DataH3>
                                </DataItemWrapper>
                            </GridDataWrapper>
                        </Fade>
                    </>
                }
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
