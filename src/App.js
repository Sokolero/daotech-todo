import React from "react";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";


import "./App.scss";

const App = (props) => {

  return(
    <div className="wrapper">
      <header className="header d-flex justify-content-center align-items-center">
        <h1>--- TODO ---</h1>
      </header>
      <div className="container grid-container">
        <aside className="aside d-flex flex-column">
          <button className="btn btn-primary d-flex align-items-center"><span className="plus">+</span> Create Task</button>
        </aside>
        <main className="main bg-primary rounded-3 text-secondary">
          <div className="task-container rounded-3">
            <div className="task-container__filters d-flex justify-content-center">
              <button type="button" className="btn-lg btn-primary flex-grow-1 active">All</button>
              <button type="button" className="btn-lg btn-primary flex-grow-1 ">Incomplete</button>
              <button type="button" className="btn-lg btn-primary flex-grow-1 ">Done!</button>
            </div>
            <div className="task-container__body">
              <ul className="task-list">
                <li className="task-list__item">Task 1</li>
                <li className="task-list__item">Task 2</li>
                <li className="task-list__item">Task 2</li>
              </ul>
            </div>
          </div>
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
