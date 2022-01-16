import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as _ from "lodash";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import TaskContainer from "./components/TaskContainer";
import TaskList from "./components/TaskList";
import ModalTaskForm from "./components/ModalTaskForm";
import TaskCounter from "./components/TaskCounter";

import "./App.scss";



// ==== App component =========================================================
const App = (props) => {

  const modalTaskForm = useSelector((state) => state.modalTaskForm);
  const tasks = useSelector((state) => state.tasks);
  const displayedTask = useSelector((state) => state.displayedTask);
  const dispatch = useDispatch();

  function toggleModalTaskForm(){
    dispatch({ type: "toggleModalTaskForm" });
  }

  useEffect(() => {
    const storage = window.localStorage;
    storage.setItem('tasks', JSON.stringify(tasks));
    // console.log(displayedTask)
  });

  return(
    <div className="wrapper">
      { modalTaskForm.visibility ? <ModalTaskForm /> : null }
      <header className="header d-flex justify-content-center align-items-center">
        <h1>--- TODO ---</h1>
      </header>
      <div className="container-fluid grid-container">
        <aside className="aside d-flex flex-column">
          <button onClick={ toggleModalTaskForm } className="btn btn-primary d-flex justify-content-center align-items-center">
            <span className="plus">+</span>
            <span className="btn-text">Create Task</span>
          </button>
          <TaskCounter />
        </aside>
        <main className="main bg-primary rounded-3 text-secondary">
          <TaskContainer />
          <div className="note-container">
            <h3 className="note__title">{ displayedTask.title || "Нажмите на задачу для просмотра деталей" }</h3>
            <hr></hr>
            <p className="note__text">{ displayedTask.note || null}</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
