import { useState } from "react"


export const Product = () => {

    const [flag ,setFlag] = useState(false)

    let products = [

        { id:1 , name : "Product-1" , price :100 ,quantity : 1},
        { id:2 , name : "Product-2" , price :200 ,quantity : 1},
        { id:3 , name : "Product-3" , price :300 ,quantity : 1}
    ]

    const Increment = () => {

        quantity = quantity+1
    }

    return(

        <>

        <div className="main">

            <div className="product">
                <h1>Product</h1>

                {products.map((el)=>(
                    <div>
                        <p>{el.name}</p>
                        <p>{el.price}</p>
                        <button>-</button>
                        <p>{el.quantity}</p>
                        <button>+</button>
                    </div>
                ))}

            </div>

            <div className="cart">
                <h1>Cart</h1>
            </div>

        </div>
        </>
    )
}