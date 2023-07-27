import React from "react";
import { setInputValue, handleSubmit, handleCompleted, handleDelete, handleEdit } from "./TodoSlice";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import './todo.css'

function TodoRedux() {
  const dispatch = useDispatch();
  const inititalState = useSelector((state) => {
    return state.todo;
  });

  function temp(e) {
    e.preventDefault();
    dispatch(handleSubmit());
  }

  //   console.log(inititalState)

  return (
    <>
      <form onSubmit={temp}>
        <input
          type="text"
          placeholder="Enter your task"
          value={inititalState.inputValue}
          onChange={(e) => dispatch(setInputValue(e.target.value))}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {
            inititalState.tasks.map((task, index) => {
                return (
                  <li className={inititalState.completed.includes(index) ? "completed" : ""}
                    key={index}>
                      {task}
                      {!inititalState.completed.includes(index)
                        ? <span onClick={() => dispatch(handleDelete(index))}><DeleteIcon /></span> 
                        : ''
                      }

                      <span onClick={() => dispatch(handleEdit(index))}><EditIcon /></span>
                      <span onClick={() => dispatch(handleCompleted(index))}><CheckIcon /></span>
                  </li>
                )
            })
        }
      </ul>
    </>
  );
}

export default TodoRedux;
