import { useState } from "react"


export const Home = () => {

    const [data,setData] = useState([])

    return(
        <>

        <div className="nav">
            <li>Comedy</li>
            <li>Thrill</li>
            <li>Action</li>
            <li>History</li>
        </div>

        </>
    )
}