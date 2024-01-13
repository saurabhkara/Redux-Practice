function todoAction(todo) {
  console.log("Action", todo);
  return { type: "ADD", payload: todo };
}

export default todoAction;
