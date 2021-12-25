import { getAll,getOne,create,update,deleteContent, getAllDistrict } from "../http/contentAPI"
import { CREATE, FETCH_ALL, FETCH_ONE,UPDATE_CONTENT,DELETE_CONTENT, GET_DISTRICTS } from "../utils/actionsType"


export const Create = ({formData, id}) => async(dispatch) =>{
    try
    {
        const {data} = await create(formData ,id)
        dispatch({type:CREATE , payload:data})
    }catch(e){
        console.log(e)
    }
}

export const GetAll = () => async(dispatch) =>{
    try{
        const {data} = await getAll()
    dispatch({type:FETCH_ALL, payload: data})
    }catch(e){
        console.log(e)
    }
}


export const GetOne = ({id}) => async(dispatch) =>{
    try{
        const {data} = await getOne(id)
    dispatch({type:FETCH_ONE, payload: data})
    }catch(e){
        console.log(e)
    }
}

export const Update =({formData,id}) => async(dispatch) =>{
    try{
        const {data} = await update(formData,id)
        dispatch({type:UPDATE_CONTENT,payload:data})
    }catch(e){
        console.log(e)
    }
}

export const Delete =({id}) => async(dispatch) =>{
    try{
        await deleteContent(id)
        dispatch({type:DELETE_CONTENT})
    }catch(e){
        console.log(e)
    }
}

export const GetAllDistrict =() => async(dispatch) => {
    try{
        const {data} = await getAllDistrict()
    dispatch({type:GET_DISTRICTS, payload: data})
    }catch(e){
        console.log(e)
    }
}