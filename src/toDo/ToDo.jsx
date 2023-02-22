/* eslint-disable react/button-has-type */
import { useState } from 'react';

import './toDo.css';

import UpdateTask from '../components/update/UpdateTask';

let idTracker = 0;

function ToDo() {
  const [task, setTask] = useState([]);

  const updateList = (newTdo) => {
    setTask([...task, { tdo: `${newTdo}`, id: idTracker, status: 'adone' }]);
    idTracker += 1;
  };

  const deleteTask = (targetIndex) => {
    setTask(() => {
      return task.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div className="todoList">
      <header>toDo</header>
      <form
        className="todoList__form"
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target.elements.input.value === '') {
            e.target.elements.input.style.border = '2px solid red';
          } else {
            e.target.elements.input.style.border = 'unset';
            updateList(e.target.elements.input.value); // you can refference both name and id of a node child
          }
          e.target.elements.input.value = '';
        }}
      >
        <input
          type="text"
          id="input"
          placeholder="Input_todo"
          autoComplete="false"
        />
        <button type="submit" className="form-btn" id="submitBtn">
          Add
        </button>
      </form>
      <UpdateTask
        newTask={task}
        handleDelete={deleteTask}
        // handleDone={changeBg}
      />
    </div>
  );
}

export default ToDo;
