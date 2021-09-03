import styled from 'styled-components/macro';

export const AnchorWrapper = styled.div`
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MarketingAnchor = styled.a`
    font-weight: bold;
    color: #fff;
    font-size: 0.8rem;
    width: 100%;
    height: 100%;
    line-height: 28px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    background-color: rgb(36, 18, 57);
    transition: background-color 0.3s ease-in-out; 

    &:hover {
        background-color: rgb(3,135,103);
    }

    &:active {
        text-decoration: underline;
    }
`;