import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import * as _ from "lodash";

const Task = ({ task }) => {

  const dispatch = useDispatch();

  const itemClassName = classNames({
    "task-list__item": true,
    "d-flex": true,
    "align-items-center": true,
    "task-list__item--isdone": task.isDone,
  });

  function toggleTask(e) {
    const taskId = e.target.dataset.id;
    dispatch({
      type: "task_is_done_or_undone",
      payload: {
        id: taskId
      }
    })
  }

  function removeTask() {
    const taskId = task.id;
    const storage =  window.localStorage;

    dispatch({
      type: "remove_task",
      payload: {
        id: taskId
      }
    });
  }

  function displayTask() {
    dispatch({
      type: "display_task",
      payload: {
        task: task,
      }
    });
  }

  return(
    <li onClick={ displayTask } className={ itemClassName }>
        <input onChange={ toggleTask } checked={ task.isDone } className="form-check-input" type="checkbox" name="task" id={ task.id } value="option1" data-id={ task.id }/>
        <label className="form-check-label" htmlFor={ task.id  }>
          { task.title }
        </label>
        <span onClick={ removeTask } className="remove-task">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash sv" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        </span>
    </li>
  );
};

export default Task;
