import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const initialState = {}


const store = createStore(rootReducer,
    initialState,
    composeWithDevTools())

window.store = store
export default store