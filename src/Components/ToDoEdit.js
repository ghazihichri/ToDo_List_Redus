import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTodo } from "../Redux/Action";
import {Button} from 'react-bootstrap'
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

Modal.setAppElement("#root");

const EditTodo = ({ found }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editText, setEditText] = useState(found.affaire);
  const [editHeure, setEditHeure] =useState(found.heure)
  const [editDesc,setEditDesc] = useState(found.description)

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const dispatch = useDispatch();
  const editt = () => {
    dispatch(editTodo({ index: found.id, editedText: editText, editDesc:editDesc,editHeure:editHeure}));
    closeModal();
  };
  return (
    <div>
      <Button className="btn" onClick={openModal} id="btnEdit">
       Edit
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <input
          id="ModalInput"
          type="text"
          placeholder="Edit to do..."
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
          <input
          id="ModalInput"
          type="text"
          placeholder="Edit the time  :  "
          value={editHeure}
          onChange={(e) => setEditHeure(e.target.value)}
        />
         <input
          id="ModalInput"
          type="text"
          placeholder="Edit the description..."
          value={editDesc}
          onChange={(e) => setEditDesc(e.target.value)}
        />
      





        <button className="Modal-Btn" onClick={editt}>
          Save
        </button>
        <button className="Modal-Btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default EditTodo;