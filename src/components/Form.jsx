import { useState } from "react";
import styles from './form.module.css';

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const trimmedTodo = todo.trim();

        if (trimmedTodo === '') {
            alert("Todo cannot be empty!");
            return;
        }

        const newTodo = { text: trimmedTodo, completed: false };
        setTodos([...todos, newTodo]);  // ✅ Update Parent State
        setTodo('');
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
