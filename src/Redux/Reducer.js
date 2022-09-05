import {EDIT_TODO, ADDTODO , EDITTASK,DELETE_TODO} from "./ActionTypes"

const initialState = {
     todoss: [
        { affaire:'Créer les components', heure:'22:00',description:'juste une phrase pour remplir la description',faite:false , id : Math.random() },
        { affaire:'Linker les routes', heure:'22:02',description:'juste une phrase pour remplir la description',faite:false , id : Math.random() },
        { affaire:'Créer Redus', heure:'22:59',description:'juste une phrase pour remplir la description',faite:true , id : Math.random() },
        { affaire:'Tester le Store', heure:'23:15',description:'juste une phrase pour remplir la description',faite:true , id : Math.random() },
        { affaire:'Créer ToDo', heure:'08:50',description:'juste une phrase pour remplir la description',faite:false , id : Math.random() },
        
        ],
    }
const Reducer =(state=initialState,action)=>{
    switch (action.type) {
       
        case ADDTODO:return {...state,todoss:[...state.todoss,action.payload]}
        case EDITTASK: return {...state,todoss:state.todoss.map(task=>task.id==action.payload? {...task,faite:!task.faite}:task)}
        case EDIT_TODO:return{  ...state,todoss:state.todoss.map(el=>  el.id===action.payload.index? {...el,affaire:action.payload.editedText,heure:action.payload.editHeure,description:action.payload.editDesc} : el )}
        case DELETE_TODO: return {...state,todoss:state.todoss.filter(el=> el.id=action.payload)}
        default: return state
            
    }
    
}
export default Reducer