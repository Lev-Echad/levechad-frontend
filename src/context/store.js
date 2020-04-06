import { createStore } from 'easy-peasy';
import registerForm from './models/registerForm'
const storeModel = {
    registerForm
}

export default createStore(storeModel);