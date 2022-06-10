import { Home } from "../MovieApp/Home"
import { HomeDetails } from "../MovieApp/HomeDetails"
import { Route , Routes } from "react-router"
import { Movies } from "../MovieApp/Movie"

export const AllRoutes = () => {
    

    return(

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<HomeDetails />} />
        </Routes>
    )
}