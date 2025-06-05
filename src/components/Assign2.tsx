import {useState} from 'react';
import '../CSS/Assign2.css'

interface todo {
    id: number;
    text: string;
    completed: boolean;
  }

const Assign2 = () => {

    const [todo,SetTodo] = useState<string>("");
    const [todos,SetTodos] = useState<todo[]>([]);

    const AddTodo = () => {
        if(todo.trim() === "") return;
        const newtodo = {
            id: Date.now(),
            text: todo,
            completed: false,
        };
        SetTodos([...todos, newtodo]);
        SetTodo("");
    }

    const DelTodo = (id:number) => {
        SetTodos(todos.filter((item) => item.id !== id))
    }

    const ToggleComplete = (id:number) => {
        SetTodos(
            todos.map((item)=>
                item.id === id ? {...item, completed: !item.completed}: item
            )
        )
    }

    return(
        <>
            <h1 className="title">Assignment - 2</h1>

            <div className="Add-section">
                <input type='text' placeholder='Add your Task' className='text' value={todo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => SetTodo(e.target.value)}/>
                <button className='Add' onClick={AddTodo}>Add</button>
            </div>

            <div className="main">
                {todos.map((item) => (
                    <li className='list' key = {item.id}>
                        <input type='checkbox' value={todo} className='check' checked={item.completed} onChange={() => ToggleComplete(item.id)}/>
                        <span className='Text' style={{textDecoration: item.completed ? "line-through" : "none",}}>
                            {item.text}
                        </span>
                        <button className='delete' onClick={() => DelTodo(item.id)}>Delete</button>
                    </li>))
                }
            </div>
        </>
    );
}

export default Assign2 ;