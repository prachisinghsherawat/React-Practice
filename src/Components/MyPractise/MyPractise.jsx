import { useState } from "react"


export const MyPractise = () => {

    let products = [

        { id:1 , name : "Product-1" , price :100 , quantity : 0},
        { id:2 , name : "Product-2" , price :200 , quantity : 0},
        { id:3 , name : "Product-3" , price :300 , quantity : 0}
    ]

    const [item , setItem] = useState(products)
    const [total , setTotal] = useState()

    const incrementCounter = (id) => {

        item.map((el)=>{
            if(el.id == id){
                el.quantity++;
            }
        })
        setItem([...item])

    }

    const decrementCounter = (id) => {

        item.map((el)=>{
            if(el.id == id){
                el.quantity--;
            }
        })
        setItem([...item])

    }

    const totalValue = () => {
        
    }

    return(

        <>

        <div className="product">

            {item.map((el)=>(
                <div>
                    <p>{el.name}</p>
                    <p>{el.price}</p>

                    <button disabled={el.quantity ==0} onClick={()=>decrementCounter(el.id)}>-</button>
                    <p>{el.quantity}</p>
                    <button onClick={()=>incrementCounter(el.id)}>+</button>

                    <p>{el.price * el.quantity}</p>
                </div>
            ))}
            
        </div>


        </>
    )
}