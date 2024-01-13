import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import todoAction from "./store/action/todo";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  function handleOnChange(event) {
    console.log(event?.target?.value);
  }

  const addTodo = () => {
    dispatch(todoAction("First Todo"));
  };

  return (
    <div className="App">
      <h1>Redux Revision</h1>
      <div>
        <input placeholder="Enter your todo" onClick={handleOnChange} />
        <button onClick={addTodo}>Add todo</button>
      </div>
      {state.todo?.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}

export default App;
