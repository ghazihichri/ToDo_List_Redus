import { ADDTODO,EDITTASK,EDIT_TODO,DELETE_TODO } from "./ActionTypes";
export const addTodo = (newtodo)=>{

    return{
        type:ADDTODO ,
        payload : newtodo,
      } ;
};

export const editTask=(payload)=>{
  return(
      {type:EDITTASK,payload}
  )
}
export const editTodo = (p) => {
  return {
    type: EDIT_TODO,
    
    payload: p,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};