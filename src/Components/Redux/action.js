import axios from "axios"


export const ADD_TODO = "ADD_TODO"
export const GET_TODO = "GET_TODO"


const AddTodo = () => ({
    type : ADD_TODO          
})

const GetTodo = (payload) => ({

    type : GET_TODO ,
    payload : payload
})

export const HandleSubmit = (data) => (dispatch) => {

    axios.post("http://localhost:8080/todos" , data ).then(() => getData())
}

export const getData = () => (dispatch) => {

    axios.get("http://localhost:8080/todos" ).then((res) => dispatch(GetTodo(res.data)))
}
