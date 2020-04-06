import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import WizardDotHeader from '../wizardDotHeader/wizardDotHeader'


import './volunteerRegisterWizard.scss'
import { useStoreState,useStoreActions } from 'easy-peasy';
import SendSmsStart from '../sendSmsStart/sendSmsStart';
import SmsPincodeAuth from '../smsPincodeAuth/smsPincodeAuth'
import RegisterWizardUserDetails from '../registerWizardUserDetails/registerWizardUserDetails'

function VolunteerRegisterWizard(props) {
    const stage = useStoreState(state => state.registerForm.currentFormView)
    const smsSent = useStoreState(state => state.registerForm.userPhoneAuth.sent)


    const wizardStages = ["אישור טלפוני", "קצת עלי", "פרטי משתמש", "נתחיל לעבוד!"]
     

    return (
        <React.Fragment>
            <WizardDotHeader Stages={wizardStages} />
            <Container className="mt-5 text-center">
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
}

VolunteerRegisterWizard.propTypes = {

}

export default VolunteerRegisterWizard

