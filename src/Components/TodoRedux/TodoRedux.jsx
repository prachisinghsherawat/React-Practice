

export const TodoRedux = () => {

    const [items ,setItems] = useState({

        food : "",
        status : false
    })

    

    return(
        
        <>

        <input type="text" placeholder="enter a todo" id="food" />
        <button>Submit</button>

        </>
    )
}