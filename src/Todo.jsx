import { useDispatch, useSelector } from 'react-redux';
import AddTodo from './AddTodo';
import { deleteTodo } from './features/todo/todoSlice';
export default function Todo(){

    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todos);
    function deleteTask(id){
        dispatch(deleteTodo(id));
    }       
    
    return (
    <>
    <h1>Todos</h1>
    <ul>
    {todos.map((todo)=><li key={todo.id}>{todo.task}
    <button onClick={()=>deleteTask(todo.id)}>Delete</button>
    </li>)}
    </ul>
    <AddTodo/>
    </>
    )
}