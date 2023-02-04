import { GET_ALL_CLIENTS,GET_CLIENTE_BY_NAME, GET_CLIENT, GET_CLIENT_BY_ID, DELETE_ITEM,POST_CLIENT,UPDATE_ITEM} from "./actions/clientsAction"


const initialState={
    clientes:[],
    cliente:{},
  
   
}


export default function reducer(state=initialState, action){

    switch(action.type){
        case GET_ALL_CLIENTS:
            return{
                ...state,
                clientes:action.payload
            }
        case GET_CLIENTE_BY_NAME:
            return{
                ...state,
                clientes:action.payload
            }
        case GET_CLIENT:
        return{
            ...state,
            cliente:action.payload
        }
        case GET_CLIENT_BY_ID:
            return{
                ...state,
                cliente:action.payload
            }
        case DELETE_ITEM:
            return state
        case POST_CLIENT:
            return state
            
        case UPDATE_ITEM:
            return{
                ...state,
                cliente:action.payload
            }
      
                
                
            
        default:
            return state;
    }



}
