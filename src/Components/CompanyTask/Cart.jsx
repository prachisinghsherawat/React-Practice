
// ------------------ Cart Page ------------------------------------------->


export const Cart = ({item,total}) => {

    return(
        <>

        <div className="cart">
            <h1>Cart</h1>

                {item.map((el)=>(
                    <div>
                        {el.quantity >0 ?
                          <div id="box">
                            <p>{el.name}</p>
                            <p>{el.quantity*el.price}</p>
                          </div>

                          :

                          <div>
                              <p>Nothing in Cart</p>
                          </div>
                        
                        }                        
                    </div>
                    
                ))}

            <div>
                <h3>Total : {total}</h3>
            </div>

        </div>
        
        </>
    )
}