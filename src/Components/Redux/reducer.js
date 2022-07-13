import { GET_BOOKS } from "./action"



const initState = {

    Books : []
}

const BookReducer = (store = initState , {type , payload}) => {

    switch(type){

        case GET_BOOKS :
            return {...store , Books : [...payload]}
    }
}
