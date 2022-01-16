import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import TaskContainer from "./components/TaskContainer";
import TaskList from "./components/TaskList";
import ModalTaskForm from "./components/ModalTaskForm";

import "./App.scss";

const App = (props) => {

  const modalTaskForm = useSelector((state) => state.modalTaskForm);
  const task = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  function toggleModalTaskForm(){
    dispatch({ type: "toggleModalTaskForm" });
  }

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
