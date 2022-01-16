import React from "react";
import { useSelector } from "react-redux";

import "./TaskCounter.scss";


const TaskCounter = (props) => {

  const tasks = useSelector((state) => state.tasks);

  const doneCount = tasks.filter((task) => task.isDone).length;
  const allCount = tasks.length;

  return(
    <div className="task-counter">
      <span className="task-counter--done">{ doneCount }</span>  из  <span className="task-counter--all">{ allCount }</span>
      <br/>
        задач выполнено
    </div>
  );
}

export default TaskCounter;
