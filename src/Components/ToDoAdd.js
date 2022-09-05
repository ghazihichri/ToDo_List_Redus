import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Action";
import {Button} from 'react-bootstrap'
// import {state} from "../Redux/Reducer"
const AddTodo = () => {
  const [affaire, setAffaire] = useState("");
  const [heure, setHeure] = useState("");
  const [description, setDescription] = useState("");
//   affaire:'Créer ToDo', heure:'',description:'',faite:false , id : Math.random()
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addTodo({  affaire,  heure,  description,  faite:false,  id: Math.random() }));
    setAffaire("");
    setHeure("");
    setDescription("");
  };


  return (
    <div >
        <h1>AddToDo</h1>
       
        <input
          type="text"
          id="input"
          placeholder="affaire"
          value=  {affaire}
          onChange={(e) => setAffaire(e.target.value)}
        >
            {/* affire : {affaire} */}
        </input>

        <input
          type="text"
          id="input"
          placeholder="Heure"
          value={heure}
          onChange={(e) => setHeure(e.target.value)}
        />
        
        <input
          type="text"
          id="input"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />


        <br />
        <Button onClick={()=> (add())} id="btnadd">
          Add
        </Button>
      
    </div>
  );
};

export default AddTodo;