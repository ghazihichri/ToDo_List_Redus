import { useSelector ,useDispatch} from "react-redux"
import {Link} from 'react-router-dom'
import { useState } from "react"
import { editTask } from "../Redux/Action"
import {Button} from 'react-bootstrap'

const ToDoList = ()=>{
    const list = useSelector((state) => state.todoss)
    const [filterT,setFilterT] = useState('all')
    
    return (
        
        <div>
        <div className="btnfilter">
         <Button onClick={()=>setFilterT('all')} >All</Button>
         <Button onClick={()=>setFilterT('done')} id="btndone" >Done</Button>
         <Button onClick={()=>setFilterT('undone')}id="btnundone">Undone</Button>
        </div>
        {/* { list.map (  el =><Link to ={`/Description_ToDo/${el.id}`}><h2>{el.affaire}</h2></Link>  ) } */}
        
        {
            
            filterT == 'all' ?
            list.map(el =><Link to ={`/Description_ToDo/${el.id}`}className='notligne'> <h2>{el.affaire}</h2> </Link>    ) 
            :
            filterT == 'done' ?
            list.filter(task => task.faite == true).map(el =><Link to ={`/Description_ToDo/${el.id}`}className='notligne'><h2>{el.affaire}</h2></Link> )
            :
            list.filter(task => task.faite == false).map(el =><Link to ={`/Description_ToDo/${el.id}`}className='notligne'><h2>{el.affaire}</h2></Link>  )
        }
       <Link to='/ToDoAdd'className='notligne'> <Button id="btnaddL">ToDo Add</Button> </Link> 
          
        </div>
    )
}
export default ToDoList
