import React from "react";
import Todo from "../components/Todo";

export const initialState = [
  {
    task: "go to gym",
    completed: false,
    id: 123,
  },
  {
    task: "do laundry",
    completed: false,
    id: 1234,
  },
  {
    task: "watch more redux videos",
    completed: false,
    id: 12345,
  },
];

export function toDoReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "Add_Task":
      const newTodo = {
        id: new Date(),
        task: action.payload,
        completed: false,
      };
      return [...state, newTodo];
    case "Toggle_Task":
      console.log(action.payload);
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    case "Clear_Completed":
      console.log(action.payload);
      return state.filter((item) => item.completed === false);
    default:
      return state;
  }
}
