import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as _ from "lodash";

import "bootstrap/scss/bootstrap.scss";

import App from "./App.js"

// ---- Initial state --------------------------------------------------------
const initialState = {
  tasks: [], // { id, name, note, isDone }
  activeFilter: "all", // all, incomplete, done
  createTaskForm: "hidden", // show, hidden
  activeTask: null,
  taskForm: false,
};

// --- switchers ---------------------------------------------------------------
const _switchIsDone = (tasks, id) => {
  return tasks.map((task) => {
    return task.id === id
      ? { ...task, isDone: !task.isDone }
      : task;
  });
};

// --- Reducer ----------------------------------------------------------------
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "create_task":
      return { ...state, tasks: [ ...state.tasks, action.payload.task ] }
    case "click_task":
      return {
        ...state,
        tasks: _switchIsDone(state.tasks, action.payload.id)
      };

    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("root")
);
