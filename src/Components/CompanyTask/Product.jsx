


export const Product = () => {

    let products = [

        { id:1 , name : "Product-1" , price :100},
        { id:2 , name : "Product-2" , price :200},
        { id:3 , name : "Product-3" , price :300},
        { id:4 , name : "Product-4" , price :400}
    ]

    return(
        
        <>

        <h1>Products</h1>

        {products.map((el)=>(
            <div>
                {el.name}
                {el.price}
                
                <div>
                    <button>-</button>
                    <p>{}</p>
                    <button>+</button>
                </div>
            </div>
        ))}
        </>
    )
}