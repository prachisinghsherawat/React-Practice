

export const Counter = ({counter , Increment , Decrement}) => {

    return(

        <>

        <h1>Counter : {counter}</h1>

        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>

        </>
    )
}