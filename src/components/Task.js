import React from "react";

const Task = ({ task }) => {

  return(
    <li className="task-list__item">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="task" id="1" value="option1" />
        <label class="form-check-label" htmlFor="1">
          { task.name }
        </label>
      </div>
    </li>
  );
};

export default Task;
