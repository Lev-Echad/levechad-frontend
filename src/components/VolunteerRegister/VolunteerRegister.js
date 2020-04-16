import RegisterWizard from './RegisterWizard/RegisterWizard';
import RegisterFormProvider from '../../contexts/registerForm.context';
import PageHeader from '../UI/PageHeader/PageHeader';
import './VolunteerRegister.scss';
import React from 'react';

function VolunteerRegister(props) {
    return (
        <React.Fragment>
            <PageHeader Title="הרשמה להתנדבות" Text="הצטרפו אלינו! זה component אז אפשר לשים כאן מה שרוצים!" />
            <RegisterFormProvider>
                <RegisterWizard />
            </RegisterFormProvider>
        </React.Fragment>
    )
};
export default VolunteerRegister;

