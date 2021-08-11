import styled from 'styled-components/macro';
import { device } from '../../device';

export const FooterContainer = styled.div`
    background-color: #f7f4ea;
    height: fit-content;
    width: 100%;
    padding: 25px;

    @media ${device.tablet} {

    }
`;

export const FooterSectionWrapper = styled.div`
    background-color: blue;
    display: flex;
    flex-wrap: wrap;
    min-width: fit-content;
    max-width: 416px;

    @media ${device.tablet} {
        justify-self: end;
}
`;

export const FooterSection = styled.div`
    background-color: tan;
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