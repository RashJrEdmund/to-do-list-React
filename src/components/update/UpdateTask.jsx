/* eslint-disable react/prop-types */
import './update.css';

function UpdateTask({ newTask, handleDelete /* handleDone */ }) {
  return (
    <div className="todoList__Tasks">
      {newTask.map((el, index) => {
        return (
          <div className="todoList__Task" key={el.id} id={index}>
            <p className="todoList__Tasks--Task-sep-sep" id={el.id}>
              {el.tdo}
            </p>
            <div className="Task-btns">
              <button
                className="tick"
                type="button"
                onClick={(e) => {
                  console.log('this works', e);
                  // handleDone(index);
                }}
              >
                Done
              </button>

              <button
                className="delete-btn"
                type="button"
                onClick={() => handleDelete(index)} // this call back helps alot here
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UpdateTask;
