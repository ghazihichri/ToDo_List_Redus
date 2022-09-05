import {Routes,Route} from 'react-router-dom'
import './App.css';
import NavToDo from './Components/NavToDo';
import ToDoAdd from './Components/ToDoAdd';
import ToDoCard from './Components/ToDoCard';
import ToDoList from './Components/ToDoList';

function App() {
  return (
  <div >
    
    <NavToDo/>
    <Routes>
      <Route path='/' element={<ToDoList/>}className='notligne'></Route>
      <Route path='/ToDoAdd' element={<ToDoAdd/>}className='notligne'></Route>
      <Route path='/Description_ToDo/:id'element={<ToDoCard/>}className='notligne'></Route>
    </Routes>
   
  </div>
  );
}

export default App;
