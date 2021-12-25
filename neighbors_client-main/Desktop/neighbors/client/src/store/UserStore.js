import {AUTH,LOGOUT,DELETE_USER, UPDATE_USER} from '../utils/actionsType'


const authReducer = (state ={authData: null}, action) =>{
    switch(action.type){
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data}))
            return {...state, authData:action?.data}
        
        case LOGOUT:
            localStorage.clear()
            return{...state,authData:null}
        case DELETE_USER:
            localStorage.clear()
            return{...state,authData:null}
        case UPDATE_USER:
            return{
                ...state,
                authData:action?.data
            }
        default:
            return state;
    }
}


export default authReducer;