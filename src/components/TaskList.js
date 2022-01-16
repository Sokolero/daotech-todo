import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Task from "./Task";

const filterFunctions = {
  all: (arr) => arr,
  incomplete: (arr) => arr.filter(item => !item.isDone),
  done: (arr) => arr.filter(item => item.isDone),
};

const TaskList = (props) => {

  const tasks = useSelector((state) => state.tasks);
  const activeFilter = useSelector((state) => state.activeFilter);
  const dispatch = useDispatch();

  // console.log(tasks);

  return(
    <div className="task-container__body">
      <ul className="task-list">
        {
          filterFunctions[activeFilter](tasks).map((task) => <Task task={ task } key={ task.id }/>)
        }
      </ul>
    </div>
  );
};

export default TaskList;
