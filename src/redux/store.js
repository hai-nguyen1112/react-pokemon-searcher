import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'

// redux store chrome extension dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// end of redux store chrome extension dev tool

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
