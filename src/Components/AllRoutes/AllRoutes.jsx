import { Home } from "../MovieApp/Home"
import { HomeDetails } from "../MovieApp/HomeDetails"
import { Route , Routes } from "react-router"
import { Movies } from "../MovieApp/Movie"
import { Task } from "../Revision/Task1"
import { HomePage } from "../Revision/Task2/HomePage"
import { Grocery } from "../GroceryList/Grocery"
import { TodoList } from "../TodoList/TodoList"
import { TodoRedux } from "../TodoRedux/TodoRedux"
import { Task3 } from "../Revision/Task3"
import { Task4 } from "../Revision/Task4"

export const AllRoutes = () => {
    

    return(

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<HomeDetails />} />
            <Route path="/grocery" element={<Grocery/>} />
            <Route path="/todo" element={<TodoList/>} />
            <Route path="/todoredux" element={<TodoRedux/>} />

            <Route path="/task1" element={<Task/>} />
            <Route path="/task2" element={<HomePage/>} />
            <Route path="/task3" element={<Task3/>} />
            <Route path="/task4" element={<Task4 />} />

        </Routes>
    )
}