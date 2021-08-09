import styled from 'styled-components/macro';

export const LiveChatBtn = styled.button`
    position: fixed;
    bottom: 0%;
    right: 2%;
    z-index: 999;
    background: rgb(3, 135, 103);
    color: #fff;
    font-weight: bold;
    font-size: 0.9rem;
    border: none;
    border-radius: 25px;
    padding: 0.8rem 1.4rem;
    width: fit-content;
    margin: 15px auto;

    &:hover {
        transition: all 0.2s ease-out;
        background: rgb(14, 105, 83);
    }
`;