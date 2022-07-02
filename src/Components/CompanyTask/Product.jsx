import { useState } from "react"


export const Product = () => {

    let products = [

        { id:1 , name : "Product-1" , price :100 , quantity : 1},
        { id:2 , name : "Product-2" , price :200 , quantity : 1},
        { id:3 , name : "Product-3" , price :300 , quantity : 1}
    ]

    const [item,setItem] = useState(products)
    const [total,setTotal] = useState(products)

    const Decrement = (id) => {

        item.map((el)=>{
            if(el.id == id){
                el.quantity--;
            }

            // var all = 600
            // all+= (el*quantity + el.price)
        })

        setItem([...item])
        
    }

    const Increment = (id) => {

        item.map((el)=>{
            if(el.id == id){
                el.quantity++;
            }
        })

        setItem([...item])

    }

    return(

        <>

        <div className="main">

            <div className="product">
                <h1>Product</h1>

                {item.map((el)=>(
                    <div>
                        <p>{el.name}</p>
                        <p>{el.price}</p>
                        <button disabled={el.quantity==1} onClick={()=> Decrement(el.id)}>-</button>
                        <p>{el.quantity}</p>
                        <button onClick={()=> Increment(el.id)}>+</button>
                    </div>
                ))}

            </div>

            <div className="cart">
                <h1>Cart</h1>

                {item.map((el)=>(
                    <div>
                        <p>{el.name}</p>
                        <p>{el.price * el.quantity}</p>
                    </div>
                ))}
                <p>Total : </p>
            </div>

        </div>
        </>
    )
}