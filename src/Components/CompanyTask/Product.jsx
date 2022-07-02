import { useState } from "react"


export const Product = () => {

    let products = [

        { id:1 , name : "Product-1" , price :100 ,quantity : 1},
        { id:2 , name : "Product-2" , price :200 ,quantity : 1},
        { id:3 , name : "Product-3" , price :300 ,quantity : 1}
    ]

    const [flag ,setFlag] = useState(false)
    
    const Increment = (id) => {

        products.map((el)=>{

            if(el.id == id){
                el.quantity++
                setFlag(!flag)
            }
        })
    }

    const Decrement = (id) => {

        products.map((el)=>{
            
            if(el.id == id){
                el.quantity--
                setFlag(!flag)
            }
        })
    }
    

  

    return(
        
        <>

        <div className="main">              

            <div className="Products">

            <h1>Products</h1>

                {products.map((el)=>(

                    <div id="box">
                        <p>{el.name}</p>
                        <p>{el.price}</p>
                
                        
                            <button onClick={() => Decrement(el.id)}>-</button>
                            <p>{el.quantity}</p>
                            <button onClick={() => Increment(el.id)}>+</button>
                        
                    </div>
                ))}
        </div>

        <div className="Cart">

            <h1>Carts</h1>

            {products.map((el)=>(

                <div id="box">
                    <p>{el.name}</p>
                    <p>{el.price}</p>
                
                   
                </div>
            ))}

        </div>

        </div>
        </>
    )
}