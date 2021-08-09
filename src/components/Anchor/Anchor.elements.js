import styled from 'styled-components/macro';

export const AnchorWrapper = styled.div`
    height: 28px;
    width: 100%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(36, 18, 57);

    &:hover {
        background-color: rgb(3,135,103);
        transition: all 0.3s ease-in-out; 
    }
`;

export const MarketingAnchor = styled.a`
    font-weight: bold;
    color: #fff;
    font-size: 0.8rem;
`;