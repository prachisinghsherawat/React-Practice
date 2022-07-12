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
import { Task5 } from "../Revision/Task5"
import { Task6 } from "../Revision/Task6"
import { Task7 } from "../Revision/Task7"
import { Product } from "../CompanyTask/Product"
import { SignUp } from "../Validations/SignUp"
import { Login } from "../Validations/Login"
import { RandomColour } from "../RandomColor/RandomColor"
import { ColorBox } from "../RandomColor/ColorBox"
import { SlidingBar } from "../RandomColor/SlidingBar"


export const AllRoutes = () => {
    

    return(

        <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<HomeDetails />} />
            <Route path="/grocery" element={<Grocery/>} />
            <Route path="/todo" element={<TodoList/>} />
            <Route path="/todoredux" element={<TodoRedux/>} />

            <Route path="/products" element={<Product/>} />
            <Route path="/random" element={<RandomColour/>} />
            <Route path="/box" element={<ColorBox/>} />
            <Route path="/slider" element={<SlidingBar/>} />

            <Route path="/task1" element={<Task/>} />
            <Route path="/task2" element={<HomePage/>} />
            <Route path="/task3" element={<Task3/>} />
            <Route path="/task4" element={<Task4 />} />
            <Route path="/task5" element={<Task5 />} />
            <Route path="/task6" element={<Task6 />} />
            <Route path="/task7/:id" element={<Task7 />} />

            <Route path="/signup" element={< SignUp/>} />
            <Route path="/login" element={< Login/>} />

        </Routes>
    )
}