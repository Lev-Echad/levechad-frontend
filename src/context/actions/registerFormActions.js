import { action, thunk } from 'easy-peasy';
import {sendUserAuthSms, authUserPincodeSms} from '../../api/registerApi'

// set the current view of the form
const setFormView = action((state, payload) => {
    state.currentFormView = payload
})

// send the user the authentication sms
const sendUserPhoneAuth = thunk(async (actions, payload) => {
    //await sendUserAuthSms(payload)
    actions.setSmsSent(true)
})

const setSmsSent = action((state, payload) => {
    state.userPhoneAuth.sent = payload
})

// check user pincode from sms
const authSmsPincode = thunk(async (actions, payload) => {
   //const response =  await authUserPincodeSms(payload)
    actions.setSmsAuthSuccess(true)
})

const setSmsAuthSuccess = action((state, payload) => {
    state.userPhoneAuth.success = payload
})

const setUserDetails = action((state, payload) => {
    state.userDetails = payload
})
const setUserInfo = action((state, payload) => {
    state.userInfo = payload
})
export default {
    setFormView,
    setUserDetails,
    setUserInfo,
    sendUserPhoneAuth,
    setSmsSent,
    authSmsPincode,
    setSmsAuthSuccess
}