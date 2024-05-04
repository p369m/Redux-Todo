import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";
export default function AddTodo(){
    const todos=useSelector((state)=>state.todos);
    const [task,setTask]=useState("");
    const dispatch=useDispatch();
    function handleSubmit(e){
        e.preventDefault();
        dispatch(addTodo(task));
        
    }
    
    return (

        <>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setTask(e.target.value)}></input>
        <button>Add Todo</button>

    </form>

        </>
    )
}