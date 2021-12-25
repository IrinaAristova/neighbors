import { FETCH_ALL, FETCH_ONE,CREATE,UPDATE_CONTENT, DELETE_CONTENT,GET_DISTRICTS } from '../utils/actionsType'


const postReducer = (state ={ posts:[]},action) =>{
    switch(action.type){
        case FETCH_ALL:
            return{
                ...state,
                posts: action.payload
            }
        case FETCH_ONE:
            return{
                ...state,
                post: action.payload
            }
        case CREATE:
            return{
                ...state,
                post: action.payload
            }
        case UPDATE_CONTENT:
            return{
                ...state,
                post:action.payload
            }
        case DELETE_CONTENT:
            return{
                ...state,
                post:null
            }
        case GET_DISTRICTS:
            return{
                ...state,
                districts:action.payload
            }
        default:
            return state;
    }
}


export default postReducer