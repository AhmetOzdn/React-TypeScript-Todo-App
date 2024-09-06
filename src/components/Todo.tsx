
import "../css/todo.css"
import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { FaUserEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { deleteTodoById, editTodoById } from "../redux/todoSlice";
import { useState } from "react";
import '../css/Todo.css'

interface TodoProps {
    todo:TodoType
}


function Todo({todo}:TodoProps) {
    const {id,content} = todo;
    const [isEdit , setIsEdit] = useState<boolean>(false);
    const [editedTodo , seteditedTodo] = useState<string>(content);
    const dispatch = useDispatch();


    const handleRemoveTodo = () => {
        dispatch(deleteTodoById(id));
    }

    const handleEditTodo = () => {
     const payload:TodoType = {
        id:id,
        content:editedTodo
     }
     dispatch(editTodoById(payload));
     setIsEdit(false) ;
    }
  return (
    <div className="container">
  
       
        {isEdit ? <input className="todoInput" type="text" value={editedTodo} 
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=> seteditedTodo(e.target.value)}/> : <div>{content}</div>}
   
     <div>
        
        <CiCircleRemove className="icon" onClick={handleRemoveTodo}></CiCircleRemove>
        
       
        {isEdit ?  <CiCircleCheck className="icon" onClick={handleEditTodo}></CiCircleCheck> : <FaUserEdit className="icon" onClick={()=> setIsEdit(true)}></FaUserEdit>  }
       
     </div>
    </div>
  )
}

export default Todo