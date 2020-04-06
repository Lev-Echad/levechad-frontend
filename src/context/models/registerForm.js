import registerFormActions from '../actions/registerFormActions'

//model for handeling registration form

const registerForm = {
    currentFormView: 0, // the current view in the form wizard
    userPhoneAuth: {
        sent: false, // did the use input a phone number
        success: false // did the user successfuly auth
    },
    userDetails: {},
    userInfo: {},
    ...registerFormActions
}

export default registerForm