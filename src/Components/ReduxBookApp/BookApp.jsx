
// https://62a89ad6943591102ba66ccd.mockapi.io/api/v1/books

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getData } from "../Redux/action"


export const BookApp = () => {

    const dispatch = useDispatch()
    useEffect(()=> {dispatch(getData())},[])

    const BookDetails = useSelector((Store)=> Store.Book.Books)                  // Store ---> Reducer
    console.log(BookDetails)           

    return(

        <></>
    )
}