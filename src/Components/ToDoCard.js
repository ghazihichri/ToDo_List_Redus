import { editTask } from "../Redux/Action"
import { useSelector,useDispatch } from "react-redux"
import {useParams, useNavigate} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import EditTodo from "./ToDoEdit"
import ToDoDelete from "./ToDoDelete"




const ToDoCard= () => {
    const list = useSelector((state) => state.todoss)
    const {id} = useParams()
    const found = list.find(el=> el.id == Number(id))
    const navigate = useNavigate()
    const dispatch=useDispatch()
    
    return (
        <div className='cardF'>
           
              <h3  className='TitreFound'>{found.affaire}</h3>
              <div className="txt">
              <h5 className='Date'><span>Heure  :</span>  {found.heure}</h5>
              <h5 className='description'><span>Description  :</span>  {found.description}</h5>
              </div>
              {/* <Button  onClick={()=>navigate('/')}>ToDo List</Button > */}
              {/* affaire:'Créer ToDo', heure:'',description:'',faite:false , id : Math.random() } */}
             
              <div className="btns">
              <Button onClick={()=>dispatch(editTask(found.id))} id="btnDone">Done</Button>
              <EditTodo found={found}/>
              <ToDoDelete found={found}/>
              </div>

              {/* <Button onClick={()=>dispatch(editTask(found.id))} id="btnDone">Done</Button> */}
        
            
        </div>
    )
}

export default ToDoCard

