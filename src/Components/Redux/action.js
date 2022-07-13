import axios from "axios"


export const GET_BOOKS = "GET_BOOKS"


const getBookData = (payload)=> ({

    type : GET_BOOKS ,
    payload : payload
})

export const getData = () => (dispatch) => {

    axios.get("https://62a89ad6943591102ba66ccd.mockapi.io/api/v1/books").then((res) => dispatch(getBookData(res.data)))
}