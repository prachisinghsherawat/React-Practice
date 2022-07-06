import { useEffect } from "react"
import { useState } from "react"
import { Cart } from "./Cart"


export const Product = () => {

    let products = [

        { id:1 , name : "Product-1" , price :100 , quantity : 0},
        { id:2 , name : "Product-2" , price :200 , quantity : 0},
        { id:3 , name : "Product-3" , price :300 , quantity : 0}
    ]

    const [item,setItem] = useState(products)
    const [total,setTotal] = useState()

    useEffect(()=>{TotalValue()},[item])
    
    const Decrement = (id) => {

        item.map((el)=>{
            if(el.id == id){
                el.quantity--;
            }
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

    const TotalValue = () => {
        let sum = 0
        item.map((el) => {
            sum += el.quantity*el.price
        })
        setTotal(sum)
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
                        <button disabled={el.quantity==0} onClick={()=> Decrement(el.id)}>-</button>
                        <p>{el.quantity}</p>
                        <button onClick={()=> Increment(el.id)}>+</button>
                    </div>
                ))}

            </div>

            <Cart item={item} total ={total} />

        </div>
        </>
    )
}