import React from 'react'
import PropTypes from 'prop-types'
import './volunteerRegister.scss'
import PageHeader from '../pageHeader/pageHeader'
import VolunteerRegisterWizard from '../volunteerRegisterWizard/volunteerRegisterWizard'

function VolunteerRegister(props) {
    return (
        <React.Fragment>
            <PageHeader Title="הרשמה להתנדבות" Text="הצטרפו אלינו! זה component אז אפשר לשים כאן מה שרוצים!" />
            <VolunteerRegisterWizard />
        </React.Fragment>
    )
}

VolunteerRegister.propTypes = {

}

export default VolunteerRegister

