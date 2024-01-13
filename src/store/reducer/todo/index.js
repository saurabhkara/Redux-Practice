import { combineReducers } from "redux";
const intialState = {
  todo: [],
};

function todoReduer(state = intialState, action) {
  const { type, payload } = action;
  console.log("Reduer", type, payload);
  switch (type) {
    case "ADD": {
      state.todo = [payload, ...state.todo];
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
