import API_URL from './apiConfig';


// call the api to send sms message with PIN to the user
export const sendUserAuthSms = async (phone) => {
    const response = await fetch(`${API_URL}/sendSms?phone=${phone}`)
    return response.json()
}

// call the api to send sms message with PIN to the user
export const authUserPincodeSms = async (phone) => {
    const response = await fetch(`${API_URL}/sendSms?phone=${phone}`)
    return response.json()
}


// send the user the authentication sms
// const sendUserPhoneAuth = thunk(async (actions, payload) => {
//     //await sendUserAuthSms(payload)
//     actions.setSmsSent(true)
// })

// const setSmsSent = action((state, payload) => {
//     state.userPhoneAuth.sent = payload
// })

// // check user pincode from sms
// const authSmsPincode = thunk(async (actions, payload) => {
//     //const response =  await authUserPincodeSms(payload)
//     actions.setSmsAuthSuccess(true)
// })

// const setSmsAuthSuccess = action((state, payload) => {
//     state.userPhoneAuth.success = payload
// })