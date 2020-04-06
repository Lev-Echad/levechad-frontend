import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik';
import { useStoreActions } from 'easy-peasy';

function RegisterWizardUserDetails(props) {
    const setUserDetails = useStoreActions(actions => actions.registerForm.setUserDetails)
    const setWizardStage = useStoreActions(actions => actions.registerForm.setFormView)


    const formik = useFormik({
        initialValues: {

        },
        onSubmit: values => {
            setUserDetails(values);
            setWizardStage(2)
        },
      });

      var dateDiff = Math.abs(new Date() - new Date(formik.values.bday)) < 31536000000*16;

    return (
        <React.Fragment>
            <form onSubmit={formik.handleSubmit}>
                    <input
                        id="fn"
                        name="fn"
                        type="text"
                        className="form-control w-100px"
                        onChange={formik.handleChange}
                        value={formik.values.fn}
                        placeholder="שם פרטי"
                    />
                    <input
                        id="ln"
                        name="ln"
                        type="text"
                        className="form-control w-100px mt-2"
                        onChange={formik.handleChange}
                        value={formik.values.ln}
                        placeholder="שם משפחה"
                    />
                    <input
                        id="id"
                        name="id"
                        type="text"
                        className="form-control w-100px mt-2"
                        onChange={formik.handleChange}
                        value={formik.values.id}
                        placeholder="תעודת זהות"
                    />
                    <input
                        id="bday"
                        name="bday"
                        type="date"
                        className="form-control w-100px mt-2"
                        onChange={formik.handleChange}
                        value={formik.values.bday}
                        placeholder="תאריך לידה"
                    />

                    {dateDiff && (
                       <input
                            id="ads"
                            name="ads"
                            type="text"
                            className="form-control w-100px mt-2"
                            onChange={formik.handleChange}
                            value={formik.values.id}
                            placeholder="תעודת זהות"
                        />
                    )}
                    
                    <button type="submit" className="btn btn-lg mt-2 btn-success">קבלת קוד ב-SMS</button>
                </form>
        </React.Fragment>
    )
}

RegisterWizardUserDetails.propTypes = {

}

export default RegisterWizardUserDetails

