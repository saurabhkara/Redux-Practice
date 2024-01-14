import React from "react";
import "./Todo.css";

export default function Todo({ id, title, editTodo, deleteTdo }) {
  const handleEdit = () => {
    editTodo({ id, title });
  };
  const handleDelete = () => {
    deleteTdo({ id });
  };
  return (
    <div className="card">
      <div className="titleContainer">
        <h4 className="title">{title}</h4>
      </div>
      <div className="buttonContainer">
        <button className="editBtn" onClick={handleEdit}>
          Edit
        </button>
        <button className="DeleteBtn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
