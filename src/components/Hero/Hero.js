import React, { useState, useRef, useEffect } from 'react'
import { HeroContainer, Input, ActionBtn, HeroImage, GridDataWrapper, DataH1, DataH3, DataItemWrapper, DataTitle } from './Hero.elements';
// import Fade from 'react-reveal/Fade';
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

  

    // // effect runs on intitial page load and when states countryData AND alertDisplayed are false, effect runs focuses countryName input
    useEffect(() => {
        if(alertDisplayed) return;
        // console.log('go')
        // inputRef.current.focus();
    }, [countryData, alertDisplayed])

    // // trigger API call
    const handleSubmitCountryName = (e) => {
        e.preventDefault();
        // empty input field validation
        if (!countryName) {
            handleSetAlertMsg(`User Input is Required`)
            // alert(`User Input is Required`);
            handleToggleAlertDisplayed();
           
            return
        }
        
        // (`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
        fetch(`https://weatherdbi.herokuapp.com/data/weather/${countryName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : 'https://blooming-wave-03926.herokuapp.com/',
        }
    })
            .then((res) => res.json())
            .then((data) => {
                // uses response object to prevent user mispelling breakage, resets countryName state to empty string, refocuses cursor to input
             
                if (data?.status === 'fail') {
                    handleSetAlertMsg(`Error ${data?.message}. Check Spelling and \n Try Again`);
                    handleToggleAlertDisplayed();
                    setCountryName('');
                    setCountryData(null)
                    inputRef.current.focus();
                    return;
                }
                
                // setter function for succesful response
                setCountryData(data);
                console.log(data.currentConditions)
                // console.log(data?.currentConditions?.humidity)
                // clears input value state
                setCountryName('');
            })
    }

    return (
        <>
            <HeroContainer>
                <AlertModal DisplayMe={alertDisplayed} DisplaySetter={setAlertDisplayed} DisplayMsg={alertMsg}></AlertModal>
                <HeroH1 gridArea>Learned much about UI, Responsive Design, and Accessibility building this.</HeroH1>
                <HeroH3>Plus Styled Components pushed me to handmake some UI features often abstracted by libraries. Press tab to navigate the page by keyboard to see some visual accessibility considerations.</HeroH3>
                <br></br>
                <HeroH3>This Input fetches Web API data for weather, and displays responsively styled with CSS Grid, and has input and response validation via state triggered modal, and utilizes hooks useState, useEffect, useRef. Misspell your entry for a custom modal.</HeroH3>
                <Input type='text' placeholder='Enter your city' alt='Enter your city' ref={inputRef} value={countryName} onChange={handleInputOnChange}></Input>
                {alertDisplayed ? <ActionBtn onClick={handleToggleAlertDisplayed} Hide>Hide Message</ActionBtn> :
                <ActionBtn onClick={handleSubmitCountryName}>Get Info</ActionBtn>}
                        {/* if countryData state not null, then render */}
                {countryData &&
                    <>
                            <DataH1 >{countryData?.region}</DataH1>
                            <GridDataWrapper>
                                <DataItemWrapper>
                                    <DataTitle>Conditions</DataTitle>
                                    <DataH3>{countryData?.currentConditions?.comment}</DataH3>
                                </DataItemWrapper>
                                <DataItemWrapper>
                                    <DataTitle>Temperature</DataTitle>
                                    <DataH3>{`${countryData?.currentConditions?.temp?.f} degrees F`}</DataH3>
                                </DataItemWrapper>
                                <DataItemWrapper>
                                    <DataTitle>Precipitation</DataTitle>
                                    <DataH3>{countryData?.currentConditions?.precip} </DataH3>
                                </DataItemWrapper>
                                <DataItemWrapper>
                                    <DataTitle>Wind</DataTitle>
                                    <DataH3>{`${countryData?.currentConditions?.wind?.mile} mph`}</DataH3>
                                </DataItemWrapper>
                            </GridDataWrapper>
                    </>
                }
                <HeroImage type="image" alt='Shipt Shopper making delivery' src='https://www.shipt.com/_next/image?url=https%3A%2F%2Fdruven30vo903.cloudfront.net%2Fshipt%2Fweb%2Fassets%2Fmarketing-hero.jpg&w=1080&q=75'></HeroImage>
            </HeroContainer>
            {/* <Fade>
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
            </Fade> */}

        </>
    )
}

export default Hero
