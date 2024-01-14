import constantTodo from "../../constants";

export function addTodoAction(todo) {
  console.log(" Add Action", todo);
  return { type: constantTodo.ADD, payload: todo };
}

export function editTodoAction(todo) {
  console.log(" Edit Action", todo);
  return { type: constantTodo.EDIT, payload: todo };
}

export function deleteTodoAction(todo) {
  console.log("Delete Action todo", todo);
  return { type: constantTodo.DELETE, payload: todo };
}
