import logo from './logo.svg';
import './App.css';
import { Todo } from './Components/Todo';
import { Balloon } from './Components/Balloon';
import { UseRefHook } from './Components/Hooks/UseRefHook';
import { UseMemoHook } from './Components/Hooks/UseMemoHook';
import { UseReducerHook } from './Components/Hooks/UseReducerHook';

function App() {
  return (
    <div className="App">
      {/* <Todo/> */}
      {/* <Balloon /> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoHook /> */}
      <UseReducerHook />
    </div>
  );
}

export default App;
