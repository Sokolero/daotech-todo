import React from "react";
import { useDispatch, useSelector } from "react-redux";

import TaskList from "./TaskList";


const TaskContainer = (props) => {

  const dispatch = useDispatch();

  function toggleFilter(e) {
    const filterType = e.target.dataset.filtertype;

    dispatch({
      type: "toggleFilter",
      payload: { filterType }
    });
  }

  return(
    <div className="task-container rounded-3">
      <div className="task-container__filters d-flex justify-content-center">
        <button onClick={toggleFilter} type="button" className="btn-lg btn-primary flex-grow-1 active" data-filtertype="all">All</button>
        <button onClick={toggleFilter} type="button" className="btn-lg btn-primary flex-grow-1" data-filtertype="incomplete">Incomplete</button>
        <button onClick={toggleFilter} type="button" className="btn-lg btn-primary flex-grow-1" data-filtertype="done">Done!</button>
      </div>
      <TaskList />
    </div>
  );
};

export default TaskContainer;
