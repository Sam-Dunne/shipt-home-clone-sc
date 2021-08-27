import React, { useEffect } from 'react';
import { AlertModalContainer, Alert_Modal__CardBody, Alert_Modal__CardTitle } from './AlertModal.elements';

const AlertModal = ({ DisplayMe, DisplaySetter, DisplayMsg }) => {
    console.log(DisplayMe)

    // useEffect(() => {

    // },[])

    return (
        <>
            {DisplayMe ?
                <AlertModalContainer toggle onClick={() => DisplaySetter((currentState) => !currentState)}>
                    <Alert_Modal__CardTitle>Whoopsies...</Alert_Modal__CardTitle>
                    <Alert_Modal__CardBody>{DisplayMsg}</Alert_Modal__CardBody>
                </AlertModalContainer>
                :
                <AlertModalContainer >
                    <Alert_Modal__CardTitle>Whoopsies...</Alert_Modal__CardTitle>
                    <Alert_Modal__CardBody>{DisplayMsg}</Alert_Modal__CardBody>
                </AlertModalContainer>
            }
        </>
    )
}

export default AlertModal;
