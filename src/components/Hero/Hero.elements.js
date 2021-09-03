import styled from 'styled-components/macro';
import { Section } from '../../globalStyle';
import { device } from '../../device';

export const HeroContainer = styled(Section)`
    padding: 30px;
    width: 100vw;
    ${Section}

    @media ${device.tablet} {
      padding: 0px 20px; 
    }

    @media ${device.laptopL} {
      width: 1080px;
      padding: 30px 0;
      margin: 0 auto;
    }

    @media ${device.mobileM} {
       padding: 15px;
    }
`;

export const Input = styled.input`
    display: block;
    border-radius: 10px;
    border-width: 1px;
    padding: 1.4rem;
    width: 311px;
    margin: auto;

    &:focus{
      outline: none;
    }
    

    @media ${device.tablet} {
      display: inline-block;
      margin: 0;
      width: 220px;
    }

    @media ${device.mobileM} {
      max-width: 80vw;
    }
`;

export const ActionBtn = styled.button`
    display: block;
    background: rgb(3, 135, 103);
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    border: none;
    border-radius: 10px;
    padding: 1.4rem;
    width: 311px;
    margin: 15px auto;
    outline: none;
    transition: transform 150ms ease-in;
    cursor: pointer;

    &:hover {
        background: rgb(14, 105, 83);
        transform: scale(.99);
    }

    &:active {
      transform: scale(0.9)
    }
    

    @media ${device.tablet} {
      display: inline-block;
      margin: 0 12px;
      width: 170px;
    }

    @media ${device.mobileM} {
      max-width: 80vw;
    }
`;

export const HeroImage = styled.img`
    display: block;
    object-fit: cover;
    margin: 40px auto;
    width: 311px;
    height: 350px;
    border-radius: 15px;
    
    @media ${device.tablet} {
      display: inline-block;
      height: fit-content;
      margin: 100px auto;
      width: 99%;
    }

    @media ${device.laptopL} {
      display: inline-block;
      width: 1080px;
      height: fit-content;
    }

    @media ${device.mobileM} {
      max-width: 100%;
    }
`;

export const GridDataWrapper = styled.div`
      display: grid;
      height: fit-content;
      width: 80%;
      justify-items: center;
      align-items: center;
      gap: 25px;
      margin: 0 auto;
      grid-template-columns: 1fr;
      grid-template-rows:  1fr 1fr 1fr 1fr;

      @media ${device.tablet} {
        grid-template-columns: 1fr 1fr;
        grid-template-rows:  1fr 1fr;
        width: 65%;
      }

      @media ${device.laptop} {
        width: 50%;
    }
`;

export const DataItemWrapper = styled.div`
      display: inline-flex;
      flex-direction: column;
      background: lightgray;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      min-height: 180px;
      width: 100%;      

      @media ${device.mobileM} {
       padding: 2rem 3rem;
       height: 120px;
    }

      @media ${device.tablet} {
       padding: 2rem 3rem;
       height: 150px;
       
    }
`;

export const DataH1 = styled.h1`
      font-size: 2.5rem;
      margin: 60px auto 20px auto;
      text-align: center; 
`;

export const DataTitle = styled.h4`
      align-self: center;
      font-weight: 800;
      text-align: center;
      margin: 0 auto 12px auto;
`;

export const DataH3 = styled.div`
      text-align: center;
      
`;


// export const HeroHeaderWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     padding-bottom: 10px;
// `;

