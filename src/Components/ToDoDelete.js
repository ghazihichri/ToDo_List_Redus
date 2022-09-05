import React from "react";
import {Button} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import {  deleteTodo } from "../Redux/Action";

const ToDoDelete = ({ found }) => {
  const dispatch = useDispatch();
  const deletee = () => {
    dispatch(deleteTodo(found.id));
  };
  return (
    <div>
            <Button onClick={deletee} id="btndelete" >Delete</Button>
          
    </div>
  );
};

export default ToDoDelete;
