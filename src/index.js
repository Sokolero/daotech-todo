import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "bootstrap/scss/bootstrap.scss";

import App from "./App.js"

// ---- Initial state --------------------------------------------------------
const initialState = {
  tasks: [], // { id, name, note, isDone }
  activeFilter: "all", // all, incomplete, done
  createTaskForm: "hidden", // show, hidden
  activeTask: null,
};

// --- Reducer ----------------------------------------------------------------
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "create_task":
      return { ...state, tasks: [ ...state.tasks, action.payload.task ] }
    case "done_task":
      

    default:
      return state;

  }
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
);
