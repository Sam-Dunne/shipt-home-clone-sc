import React from 'react';
import { AlertModalContainer, AlertModalCardBody, AlertModalCardTitle, AlertModalFlexWrapper, SVG_WRAPPER } from './AlertModal.elements';
import { FaTimes } from 'react-icons/fa';

const AlertModal = ({ DisplayMe, DisplaySetter, DisplayMsg }) => {

    return (
        <>
            {DisplayMe ?
                <AlertModalContainer toggle onClick={() => DisplaySetter((currentState) => !currentState)}>
                    <AlertModalFlexWrapper>
                        <SVG_WRAPPER></SVG_WRAPPER>
                        <AlertModalCardTitle>Whoopsies...</AlertModalCardTitle>
                        <SVG_WRAPPER>
                            <FaTimes />
                        </SVG_WRAPPER>
                    </AlertModalFlexWrapper>
                    <AlertModalCardBody>{DisplayMsg}</AlertModalCardBody>
                </AlertModalContainer>
                :
                <AlertModalContainer >
                    <AlertModalCardTitle>Whoopsies...</AlertModalCardTitle>
                    <AlertModalCardBody>{DisplayMsg}</AlertModalCardBody>
                </AlertModalContainer>
            }
        </>
    )
}

export default AlertModal;
