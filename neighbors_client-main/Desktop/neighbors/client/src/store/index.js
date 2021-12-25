import {combineReducers} from 'redux'

import auth from './UserStore'
import posts from './contentStore'



export default combineReducers({auth,posts})