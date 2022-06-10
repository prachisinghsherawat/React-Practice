import { useParams } from "react-router"



export const HomeDetails = () => {

    const {id} = useParams()

    return(
        
        <>
        <div className="flexDiv">

            <div className="left">
                <div className="bigImg"></div>
            </div>

            <div className="right"></div>
            
        </div>
        </>
    )
}