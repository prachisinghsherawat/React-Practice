import logo from './logo.svg';
import './App.css';
import { Todo } from './Components/Todo';
import { Balloon } from './Components/Balloon';
import { UseRefHook } from './Components/Hooks/UseRefHook';
import { UseMemoHook } from './Components/Hooks/UseMemoHook';

function App() {
  return (
    <div className="App">
      {/* <Todo/> */}
      {/* <Balloon /> */}
      {/* <UseRefHook /> */}
      <UseMemoHook />
    </div>
  );
}

export default App;
