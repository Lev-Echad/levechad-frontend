import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik';
import { useStoreActions } from 'easy-peasy';

function SendSmsStart(props) {
    const sendUserPhoneAuth = useStoreActions(actions => actions.registerForm.sendUserPhoneAuth)
    const setWizardStage = useStoreActions(actions => actions.registerForm.setFormView)


    const formik = useFormik({
        initialValues: {
          tel: '',
        },
        onSubmit: values => {
            sendUserPhoneAuth(values.tel);
        },
      });

    return (
        <React.Fragment>
            <form onSubmit={formik.handleSubmit}>
                    <input
                        id="tel"
                        name="tel"
                        type="tel"
                        className="form-control big-text"
                        onChange={formik.handleChange}
                        value={formik.values.tel}
                        placeholder="הזינו מספר טלפון"
                    />
                    <button type="submit" className="btn btn-lg mt-2 btn-success">קבלת קוד ב-SMS</button>
                </form>
        </React.Fragment>
    )
}

SendSmsStart.propTypes = {

}

export default SendSmsStart

