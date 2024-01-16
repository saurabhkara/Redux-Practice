import constantTodo from "../../constants";
// import { combineReducers } from "redux";
const intialState = {
  todo: [],
  thunkData: "",
};

function todoReduer(state = intialState, action) {
  const { type, payload } = action;
  console.log("Reduer", type, payload);
  switch (type) {
    case constantTodo.ADD: {
      state.todo = [payload, ...state.todo];
      return { ...state };
    }
    case constantTodo.EDIT: {
      const prevData = state.todo.filter((item) => item.id !== payload.id);
      state.todo = [...prevData, payload];
      return { ...state };
    }
    case constantTodo.DELETE: {
      const prevData = state.todo.filter((item) => item.id !== payload.id);
      state.todo = [...prevData];
      return { ...state };
    }
    case constantTodo.LOAD: {
      state.thunkData = payload;
      return { ...state };
    }
    default:
      return state;
  }
}

export default todoReduer;

// export default combineReducers({
//   todo: todoReduer,
// });
