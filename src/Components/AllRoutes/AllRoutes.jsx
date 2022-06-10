import { Home } from "../MovieApp/Home"
import { HomeDetails } from "../MovieApp/HomeDetails"
import { Route , Routes } from "react-router"
import { Movies } from "../MovieApp/Movie"
import { Task } from "../Revision/Task"

export const AllRoutes = () => {
    

    return(

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<HomeDetails />} />
            <Route path="/task" element={<Task/>} />
        </Routes>
    )
}