

export const Todo = ({HandleChange , HandleSubmit , data }) => {

    return(

        <>

        <h1>Todo List</h1>

        <input type="text" id="todo" placeholder="enter your todo" onChange={HandleChange}/>
        <button onClick={HandleSubmit}> Submit</button>

        {data.map((el)=>(
            <div>
                {el}
            </div>
        ))}

        </>
    )
}