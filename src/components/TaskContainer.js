import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import TaskList from "./TaskList";


const TaskContainer = (props) => {

  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.activeFilter);

  const getClassName = (type, activeFilter) => classNames({
    "btn-lg btn-primary flex-grow-1": true,
    "active": type === activeFilter,
  });

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
        <button onClick={toggleFilter} type="button" className={ getClassName("all", activeFilter) } data-filtertype="all">Все</button>
        <button onClick={toggleFilter} type="button" className={ getClassName("incomplete", activeFilter) } data-filtertype="incomplete">Незавершенные</button>
        <button onClick={toggleFilter} type="button" className={ getClassName("done", activeFilter) } data-filtertype="done">Завершенные</button>
      </div>
      <TaskList />
    </div>
  );
};

export default TaskContainer;
