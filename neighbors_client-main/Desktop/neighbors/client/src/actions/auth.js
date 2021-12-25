import { AUTH,DELETE_USER, UPDATE_USER } from "../utils/actionsType";
import {reg , login,deleteUser, updateUser} from '../http/userAPI'
import {APPLICATIONS_ROUTE} from '../utils/consts'


export const Reg = (formData,history) => async (dispatch)=>{
    try{
        const {data} = await reg(formData)
        dispatch({type:AUTH, data})
        history(APPLICATIONS_ROUTE)
    } catch(e){
        console.log(e)
    }
}

export const Log = (formData,history) => async (dispatch)=>{
    try{
        const {data} = await login(formData)
        dispatch({type:AUTH, data})
        history(APPLICATIONS_ROUTE)
    } catch(e){
        console.log(e)
    }
}

export const DeleteUser = (id, history) => async(dispatch) =>{
    try{
        await deleteUser(id)
        dispatch({type:DELETE_USER})
        history(APPLICATIONS_ROUTE)
    }catch(e){
        console.log(e)
    }
}

export const UpdateUser = (userFormData,id) => async (dispatch)=>{
    try{
        const {data} = await updateUser(userFormData,id)
        dispatch({type:UPDATE_USER, data})
    } catch(e){
        console.log(e)
    }
}