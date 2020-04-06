import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik';
import { useStoreActions,useStoreState } from 'easy-peasy';

function SmsPincodeAuth(props) {
    const smsAuthed = useStoreState(state => state.registerForm.userPhoneAuth.success)

    const authSmsPincode = useStoreActions(actions => actions.registerForm.authSmsPincode)
    const setWizardStage = useStoreActions(actions => actions.registerForm.setFormView)


    const formik = useFormik({
        initialValues: {
          'pincode': '',
        },
        onSubmit: values => {
            authSmsPincode(values['pincode']);
            
        },
      });

      useEffect(() => {
        if(smsAuthed){
            setWizardStage(1)
          }
      }, [smsAuthed])
      
    return (
        <React.Fragment>
            <form onSubmit={formik.handleSubmit}>
                    <input
                        id="pincode"
                        name="pincode"
                        type="number"
                        className="form-control big-text"
                        onChange={formik.handleChange}
                        value={formik.values.pincode}
                        placeholder="קוד ב-sms"
                    />
                    <button type="submit" className="btn btn-lg mt-2 btn-success">אישור</button>
                </form>
        </React.Fragment>
    )
}

SmsPincodeAuth.propTypes = {

}

export default SmsPincodeAuth

