import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Task = ({ task }) => {

  const dispatch = useDispatch();

  function toggleTask(e) {
    const taskId = e.target.dataset.id;
    dispatch({
      type: "task_is_done_or_undone",
      payload: {
        id: taskId
      }
    })
  }

  return(
    <li className="task-list__item">
      <div className="form-check">
        <input onChange={ toggleTask } checked={ task.isDone } className="form-check-input" type="checkbox" name="task" id={ task.id } value="option1" data-id={ task.id }/>
        <label className="form-check-label" htmlFor={ task.id  }>
          { task.title }
        </label>
      </div>
    </li>
  );
};

export default Task;
