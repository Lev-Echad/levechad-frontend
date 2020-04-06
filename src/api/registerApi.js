import API_URL from './apiConfig'


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