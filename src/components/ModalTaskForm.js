import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

import "./ModalTaskForm.scss";


const validateLength = (str) => str.length < 20;


// ===== Modal TaskForm component =============================================
const ModalTaskForm = (props) => {

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const modalTaskForm = useSelector((state) => state.modalTaskForm);
  const isValidLength = useSelector((state) => state.modalTaskForm.isValidLength);
  console.log(isValidLength);

  // --- define className valid/ invalid modificator --------------------------
  const titleClassName = classNames({
    "task-form__text-field": true,
    "invalid-input": !isValidLength,
  });

  // --- handler to close the modal window action ------------------------------------
  function closeModal() {
    dispatch({ type: "toggleModalTaskForm" });
  }

  // --- handler to add a task in the state and localStorage ------------------
  function createTask(e) {
    e.preventDefault();
    const storage = window.localStorage;

    if (modalTaskForm.isValidLength) {
      const newTask = {
        id: uuidv4(),
        title: modalTaskForm.title,
        note: modalTaskForm.note,
        isDone: false,
      };

      dispatch({
        type: "create_task",
        payload: newTask,
      });

      if (!storage.tasks) {
        storage.setItem("tasks", JSON.stringify([ newTask ]));
      } else {
        storage.setItem("tasks", JSON.stringify([ ...tasks, newTask ]));
      }
      dispatch({ type: "toggleModalTaskForm" });
    } else {
      dispatch({
        type: "invalid_length"
      });
    }
  }

  // --- handler of the changes into the input with validators -----------------
  function handleChangeInput(e) {
    let name = e.target.name;
    let value = e.target.value;

    if (validateLength(value)) {
      console.log('valid');
      dispatch({
        type: "changed_input",
        payload: {
          [name]: value,
        }
      });
    } else {
      dispatch({
        type: "invalid_length",
      });
    }
  }

  // --- get validate error message element for input -----------------------------------
  function getErrorMessage(isValidLengthState) {
    return !isValidLengthState
      ? <small className="error-message">Длина текста не может превышать 20 символов</small>
      : null;
  }

  // ---------------------------------------------------------------------------
  return(
    <div className="modal-box">
      <div onClick={ closeModal } className="modal-box__backdrop"></div>
      <div className="modal-box__container">
        <div onClick={ closeModal } className="modal-box__close">
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">
            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687
              6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687
              22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313
              26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031
              26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031
              22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031
              6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688
            L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
          </svg>
        </div>
        <form onSubmit={ createTask } action="" className="modal-box__form">
          <label htmlFor="title">
            <p className="title">Task Title</p>
            <input onChange={ handleChangeInput } type="text" name="title" value={ modalTaskForm.title } id="title" className={ titleClassName } placeholder="Type a task description"/>
            { getErrorMessage(isValidLength) }
          </label>
          <label htmlFor="note">
            <p className="note">Add a note here</p>
            <textarea onChange={ handleChangeInput } type="textarea" name="note" value={ modalTaskForm.note } className="task-form__textarea-field" rows="5" placeholder="Add note to the task"/>
          </label>
          <button className="btn btn-primary" type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}

export default ModalTaskForm;
