import { Home } from "../MovieApp/Home"
import { HomeDetails } from "../MovieApp/HomeDetails"
import { Route , Routes } from "react-router"

export const AllRoutes = () => {

    return(

        <Routes>
            <Route path="./" element={<Home />} />
            <Route path="./details" element={<HomeDetails />} />
        </Routes>
    )
}