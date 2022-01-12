import React from "react";

import TaskList from "./TaskList";


const TaskContainer = (props) => {
  return(
    <div className="task-container rounded-3">
      <div className="task-container__filters d-flex justify-content-center">
        <button type="button" className="btn-lg btn-primary flex-grow-1 active">All</button>
        <button type="button" className="btn-lg btn-primary flex-grow-1 ">Incomplete</button>
        <button type="button" className="btn-lg btn-primary flex-grow-1 ">Done!</button>
      </div>
      <TaskList />
    </div>
  );
};

export default TaskContainer;
