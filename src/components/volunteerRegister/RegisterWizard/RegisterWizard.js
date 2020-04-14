import RegisterWizardUserDetails from './WizardUserDetails/WizardUserDetails';
import { RegisterFormContext } from '../../../contexts/registerForm.context';
import WizardDotHeader from './WizardDotHeader/WizardDotHeader';
import SmsPincodeAuth from './SmsPincodeAuth/SmsPincodeAuth';
import SendSmsStart from './SendSmsStart/SendSmsStart';
import React, { useContext } from 'react';
import { Container } from 'reactstrap';
import './RegisterWizard.scss';


function VolunteerRegisterWizard(props) {

    const { formView: stage, smsSent } = useContext(RegisterFormContext);
    const wizardStages = ['אישור טלפוני', 'קצת עלי', 'פרטי משתמש', 'נתחיל לעבוד!'];
    return (
        <React.Fragment>
            <WizardDotHeader Stages={wizardStages} />
            <Container className='mt-5 text-center'>
                {stage === 0 && (
                    <React.Fragment>
                        {!smsSent ? <SendSmsStart /> : <SmsPincodeAuth />}
                    </React.Fragment>
                )}
                {stage === 1 && (
                    <RegisterWizardUserDetails />
                )}
            </Container>
        </React.Fragment>
    )
};
export default VolunteerRegisterWizard;

