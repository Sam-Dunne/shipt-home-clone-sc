import React, { useState, useRef, useEffect } from 'react'
import { HeroContainer, Input, ActionBtn, HeroImage, GridDataWrapper, DataItemWrapper, DataH1, DataTitle, DataH3 } from './Hero.elements';
import Fade from 'react-reveal/Fade';
import { HeroH1, HeroH3 } from '../../globalStyle';
import { AlertModal } from '../index';

const Hero = () => {
    const inputRef = useRef();

    // state to toggle display of AlertModal
    const [alertDisplayed, setAlertDisplayed] = useState(false);
    const handleToggleAlertDisplayed = () => {
        setAlertDisplayed(!alertDisplayed);
    }
    // takes one argument for value of string message
    const [alertMsg, setAlertMsg] = useState('');
    const handleSetAlertMsg = (msg) => {
        setAlertMsg(msg)
    }
    // stateful value of input and onChangeHandler 
    const [countryName, setCountryName] = useState('');
    const handleInputOnChange = (e) => setCountryName(e.target.value);

    // fetched data object from `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true'
    const [countryData, setCountryData] = useState(null);

    // effect runs on intitial page load and whenever countryData state changes
    useEffect(() => {
        inputRef.current.focus();
    }, [countryData])

    // trigger API call
    const handleSubmitCountryName = (e) => {
        e.preventDefault();
        // empty input field validation
        if (!countryName) {
            handleSetAlertMsg(`User Input is Required`)
            // alert(`User Input is Required`);
            handleToggleAlertDisplayed();
            // refocuses the cursor to input field
            inputRef.current.focus();
            return
        }
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
            .then((res) => res.json())
            .then((data) => {
                // uses response object to prevent user mispelling breakage, resets countryName state to empty string, refocuses cursor to input
                if (data.status === 404) {
                    handleSetAlertMsg(`Error ${data.status} ${data.message}`);
                    handleToggleAlertDisplayed();
                    setCountryName('');
                    // setCountryData(null)
                    inputRef.current.focus();
                    return;
                }
                // setter function for succesful response
                setCountryData(data[0]);
                // clears input value state
                setCountryName('');
                // refocus input cursor
                // inputRef.current.focus();
            })
    }

    

    return (
        <>
            <HeroContainer>
                <AlertModal DisplayMe={alertDisplayed} DisplaySetter={setAlertDisplayed} DisplayMsg={alertMsg}></AlertModal>
                <HeroH1 gridArea>Get the things you need from stores you trust.</HeroH1>
                <HeroH3>Order everything from groceries to household essentials for delivery to your door.</HeroH3>
                <br></br>
                <HeroH3>This Input fetches Web API data for Countries, and displays responsively styled with CSS Grid, and has input and response validation (not pretty, but gets the idea across), and utilizes hooks useState, useEffect, useRef.</HeroH3>
                <Input type='text' placeholder='Search for Country Data' ref={inputRef} value={countryName} onChange={handleInputOnChange}></Input>
                {alertDisplayed ? <ActionBtn onClick={handleToggleAlertDisplayed} Hide>Hide Message</ActionBtn> :
                <ActionBtn onClick={handleSubmitCountryName}>Get Info</ActionBtn>}
                {/* if countryData state not null, then render */}
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
