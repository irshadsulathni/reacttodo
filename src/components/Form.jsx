import { useState } from "react";
import styles from './form.module.css';

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.trim() !== '') {
            const newTodo = { text: todo, completed: false }; // Add a completed property
            setTodos([...todos, newTodo]); // Add new todo object
            setTodo('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input 
                type="text" 
                className={styles.input}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter a new todo"
            />
            <button type="submit" className={styles.button}>
                Add
            </button>
        </form>
    );
}
