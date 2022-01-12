import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import TaskContainer from "./components/TaskContainer";
import TaskList from "./components/TaskList";

import "./App.scss";

const App = (props) => {

  const taskForm = useSelector(taskForm);
  const dispatch = useDispatch();

  function openTaskCreator(){
    dispatch({ type: "toggleTaskForm" });
  }

  return(
    <div className="wrapper">
      <header className="header d-flex justify-content-center align-items-center">
        <h1>--- TODO ---</h1>
      </header>
      <div className="container-fluid grid-container">
        <aside className="aside d-flex flex-column">
          <button className="btn btn-primary d-flex justify-content-center align-items-center">
            <span className="plus">+</span>
            <span className="btn-text">Create Task</span>
          </button>
        </aside>
        <main className="main bg-primary rounded-3 text-secondary">
          <TaskContainer />
          <div className="note-container">
            <h3 className="note__title">Комментарий к задаче Task 1</h3>
            <p className="note__text">Срочно, звонить можно во вторник</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
