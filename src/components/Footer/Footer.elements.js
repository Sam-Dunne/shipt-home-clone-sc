import styled from 'styled-components/macro';
import { device } from '../../device';

export const FooterContainer = styled.div`
    background-color: #f7f4ea;
    height: fit-content;
    width: 100%;
    padding: 100px 25px;
    position: relative;
    @media ${device.tablet} {

    }
`;

export const FooterSectionWrapper = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    width: 444px;

    @media ${device.tablet} {
        margin: 0 0 0 auto;
}
`;

export const FooterSection = styled.div`
    
    margin-bottom: 16px;
    
    padding-right: 12px;
    min-width: fit-content;
    max-width: 208px;
`;

export const FooterLinkSectionHeaders = styled.h3`
    width: 208px;
    font-weight: 700;
    margin-bottom: 8px;
`;

export const FooterLinkItems = styled.a`
    width: 208px;
    font-weight: 300;
    display: block;
    line-height: 2rem;
`;
