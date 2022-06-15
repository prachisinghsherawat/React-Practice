

export const TodoRedux = () => {

    const [items ,setItems] = useState({

        food : "",
        status : false
    })

    const HandleChange = () => {

        const {id , value} = e.target;
        setItems({...items, [id] : value})
    }
    console.log(items)

    return(
        
        <>

        <input type="text" placeholder="enter a todo" id="food" onChange={items} />
        <button>Submit</button>

        </>
    )
}