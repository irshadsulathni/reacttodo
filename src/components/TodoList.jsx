import TodoItem from "./TodoItem";
import styles from './todolist.module.css';

export default function TodoList({ todos, setTodos }) {
    // Function to handle deleting a todo
    function handleDelete(itemToRemove) {
        const updatedTodos = todos.filter((todo) => todo !== itemToRemove);
        setTodos(updatedTodos);
    }

    // Function to toggle the completed state of a todo
    function toggleCompleted(itemToToggle) {
        const updatedTodos = todos.map((todo) =>
            todo === itemToToggle ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    }

    return (
        <div className={styles.todoList}>
            {todos.map((item, index) => (
                <TodoItem 
                    key={index} 
                    item={item} 
                    onDelete={handleDelete} 
                    onToggle={toggleCompleted} 
                />
            ))}
        </div>
    );
}
