import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAction,
  deleteTodoAction,
  editTodoAction,
} from "./store/action/todo";
import { useState } from "react";
import Todo from "./component/Todo";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [task, setTask] = useState("");
  const [isEditing, setEditing] = useState(0);

  function handleOnChange(event) {
    let value = event?.target?.value;
    if (value) {
      setTask(value);
    }
  }

  const sendTodo = () => {
    if (task) {
      if (isEditing) {
        dispatch(editTodoAction({ id: isEditing, title: task }));
        console.log("for editing");
        setEditing("");
      } else {
        dispatch(addTodoAction({ id: Date.now(), title: task }));
      }
      setTask("");
    } else {
      alert("Please provide task title");
    }
  };

  const editTodo = (item) => {
    console.log("item in edit", item);
    setTask(item?.title);
    setEditing(item.id);
  };

  const deleteTodo = (item) => {
    console.log("delete item", item);
    dispatch(deleteTodoAction(item));
  };

  return (
    <div className="App">
      <h1>TODO application using Redux</h1>
      <div>
        <input
          placeholder="Enter your todo"
          onChange={handleOnChange}
          value={task}
        />
        <button onClick={sendTodo}>Add todo</button>
      </div>
      {state.todo?.map((item) => {
        const { id, title } = item;
        return (
          <Todo
            title={title}
            key={id}
            id={id}
            editTodo={editTodo}
            deleteTdo={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default App;
