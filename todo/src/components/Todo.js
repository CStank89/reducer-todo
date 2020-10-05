import React, { useReducer, useState, useEffect } from "react";
import { toDoReducer, initialState } from "../reducers/index";

const Todo = () => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const [newTaskText, setNewTaskText] = useState("");

  useEffect(() => {
    console.log(state);
  }, []);

  const handleChanges = (event) => {
    event.preventDefault();
    setNewTaskText(event.target.value);
  };

  return (
    <div>
      <ul> To Do List</ul>
      {state.map((item) => (
        <ol
          className={item.completed ? "completed-item" : null}
          onClick={() => dispatch({ type: "Toggle_Task", playload: item.id })}
        >
          {item.task}
        </ol>
      ))}
      <div>
        <form>
          <input
            type="text"
            name="newTaskText"
            value={newTaskText}
            onChange={handleChanges}
          ></input>
        </form>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "Add_Task", payload: newTaskText });
          }}
        >
          {" "}
          Add Task
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "Clear_Task" });
          }}
        >
          {" "}
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Todo;
