import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as _ from "lodash";

import "bootstrap/scss/bootstrap.scss";

import App from "./App.js"

// ---- Initial state --------------------------------------------------------
const initialState = {
  tasks: [], // { id, title, note, isDone }
  activeFilter: "all", // all, incomplete, done
  createTaskForm: "hidden", // show, hidden
  activeTask: null,
  modalTaskForm: {
    visibility: false,
    isValidLength: true,
    title: "",
    note: "",
  },
};

const getInitialState = () => {
  const storage = window.localStorage;
  const _tasks = storage.getItem("tasks");

  if (!storage.getItem("tasks")) {
    console.log('1')
    return { ...initialState }
  } else {
    console.log('2');
    let tasks = JSON.parse(_tasks);
    return { ...initialState, tasks }
  }
};

// --- switchers ---------------------------------------------------------------
const _switchIsDone = (tasks, id) => {
  return tasks.map((task) => {
    return task.id === id
      ? { ...task, isDone: !task.isDone }
      : task;
  });
};

// --- reset modalTaskForm ----------------------------------------------------
const initialModalTaskForm = {
  visibility: false,
  isValidLength: true,
  title: "",
  note: "",
};

// --- Reducer ----------------------------------------------------------------
const reducer = (state, action) => {

  switch (action.type) {

    case "create_task":
      return { ...state, tasks: [ ...state.tasks, action.payload ] }

    case "task_is_done_or_undone":
      return {
        ...state,
        tasks: _switchIsDone(state.tasks, action.payload.id)
      };

    case "toggleModalTaskForm":
      return {
        ...state,
        modalTaskForm: {
          ...initialModalTaskForm,
          visibility: !state.modalTaskForm.visibility,
        }
      };

    case "toggleFilter":
      return {
        ...state,
        activeFilter: action.payload.filterType,
      }

    case "changed_input":
      console.log('got input', action.payload)
      return {
        ...state,
        modalTaskForm: {
          ...state.modalTaskForm,
          title: action.payload.title || state.modalTaskForm.title,
          note: action.payload.note || state.modalTaskForm.note,
          isValidLength: true,
        }
      }

    case "invalid_length":
      console.log('invalid')
      return {
        ...state,
        modalTaskForm: {
          ...state.modalTaskForm,
          isValidLength: false,
        }
      }

    default:
      return state;
  }
}

const store = createStore(reducer, getInitialState());

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("root")
);
