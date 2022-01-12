import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Task from "./Task";

const TaskList = (props) => {

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return(
    <div className="task-container__body">
      <ul className="task-list">
        {
          tasks.map((task) => <Task task={ task } />)
        }
      </ul>
    </div>
  );
};

export default TaskList;
