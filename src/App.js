import logo from './logo.svg';
import './App.css';

// import { Todo } from './Components/Todo/Todo';
// import { UseRefHook } from './Components/Hooks/UseRefHook';
// import { UseMemoHook } from './Components/Hooks/UseMemoHook';
// import { UseReducerHook } from './Components/Hooks/UseReducerHook';
import { Home } from './Components/MovieApp/Home';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (

    <div className="App">
      {/* <Todo/> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseReducerHook /> */}
      <Home />
      <Footer />
    </div>

  );
}

export default App;
