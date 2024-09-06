import { useDispatch } from "react-redux"
import "../css/TodoCreate.css"
import { useState } from "react";
import { createTodo } from "../redux/todoSlice";

function TodoCreate() {
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState('');
    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {// trim array in icindeki bosluklari siler
            alert("Todo Giriniz")
        } else {
            const payload = {
                id: Math.floor(Math.random() * 999999999),
                content: newTodo
            }
            dispatch(createTodo(payload));
            setNewTodo('');
        }

    }

    return (
        <div className="todoCreateContainer">
            <input value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} placeholder="TaDo Giriniz..." type="text" className="todoCreate" />
            <button onClick={handleCreateTodo} className="todoCreateButton">Olustur</button>
        </div>
    )
}

export default TodoCreate