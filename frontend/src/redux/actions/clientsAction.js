
import axios from "axios"

export const GET_ALL_CLIENTS = "GET_ALL_CLIENTS";
export const GET_CLIENT = "GET_CLIENT";
export const GET_CLIENTE_BY_NAME = "GET_CLIENTE_BY_NAME"
export const GET_CLIENT_BY_ID = "GET_CLIENT_BY_ID";
export const DELETE_ITEM = "DELETE_ITEM";
export const POST_CLIENT = "POST_CLIENT";
export const UPDATE_ITEM = "UPDATE_ITEM";



export const getAllClients = () => {
    return async (dispatch) => {
        try {
            const clients = await axios.get("http://localhost:8000/api/clientes");

            return dispatch({
                type: GET_ALL_CLIENTS,
                payload: clients.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export function getClientsById(id){
    console.log(id)
    return async function(dispatch){
        try {
            const client = await axios.get(`http://localhost:8000/api/clientes/${id}`)
              return dispatch({
                  type: GET_CLIENT_BY_ID,
                  payload: client.data
        })

        } catch (error) {
            console.log(error)
        }
            }
}

export function getClientsByName(name){
    return async function(dispatch){
        try {
            const cliente = await axios.get(`http://localhost:8000/api/clientes?nombre=${name}`)
            return dispatch({
                type: GET_CLIENTE_BY_NAME,
                payload:cliente.data
            })
        } catch (error) {
            console.log(error)
        }
       
    }
}


export function deleteItem(id) {
    id=id.toString()
    return async function (dispatch) {
      
      try {
        console.log(typeof id.toString());
        await axios.delete(`http://localhost:8000/api/clientes/${id}`);
        
        return dispatch({
          type: DELETE_ITEM,
        });
      } catch (error) {
        console.error(error);
      }
    };
  }

  export function updateItem(id, payload) {
    id=id.toString()
    console.log("desde actions",id)
    return async function (dispatch) {
      
      try {
        // console.log("desde action",payload)
        const response =await axios.put(`http://localhost:8000/api/clientes/${id}`,payload);
        console.log("action",response)
        
        return dispatch({
          type: UPDATE_ITEM,
          payload:response.data

        });
      } catch (error) {
        console.error(error);
      }
    };
  }

  export function postClients(payload){
    return async function(dispatch){
        try {
             console.log(payload)
             const post= await axios.post("http://localhost:8000/api/clientes",payload)
             return dispatch({
            type:POST_CLIENT,
        })
        } catch (error) {
            console.log(error)
        }
        
    }
}


  


