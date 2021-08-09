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
 
`;

export const Input = styled.input`
    display: block;
    border-radius: 10px;
    border-width: 1px;
    padding: 1.4rem;
    width: 311px;
    margin: auto;
    

    @media ${device.tablet} {
      display: inline-block;
      margin: 0;
      width: 220px;

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

    &:hover {
        transition: all 0.2s ease-out;
        background: rgb(14, 105, 83);
    }
    

    @media ${device.tablet} {
      display: inline-block;
      margin: 0 12px;
      width: 170px;
    }
`;

export const HeroImage = styled.img`
    display: block;
    object-fit: cover;
    margin: 100px auto;
    width: 311px;
    height: 350px;

    border-radius: 15px;
    
    @media ${device.tablet} {
      display: inline-block;
      height: fit-content;
      width: 99%;
    }

    @media ${device.laptopL} {
      display: inline-block;
      width: 1080px;
      height: fit-content;
    }
`;

// export const HeroHeaderWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     padding-bottom: 10px;
// `;

