import React from 'react';
import { AlertModalContainer, AlertModalCardBody, AlertModalCardTitle, AlertModalFlexWrapper } from './AlertModal.elements';
import { FaTimes } from 'react-icons/fa';

const AlertModal = ({ DisplayMe, DisplaySetter, DisplayMsg }) => {

    return (
        <>
            {DisplayMe ?
                <AlertModalContainer toggle onClick={() => DisplaySetter((currentState) => !currentState)}>
                    <AlertModalFlexWrapper>
                        <AlertModalCardTitle>Whoopsies...</AlertModalCardTitle>
                        <FaTimes />
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
