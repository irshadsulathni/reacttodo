import TodoItem from "./TodoItem";
import styles from './todolist.module.css';

export default function TodoList({ todos, setTodos }) {
    console.log("Current Todos:", todos); // Debugging

    // Handle deleting a todo
    function handleDelete(indexToRemove) {
        const updatedTodos = todos.filter((_, index) => index !== indexToRemove);
        setTodos(updatedTodos);
    }

    // Toggle completed state
    function toggleCompleted(indexToToggle) {
        const updatedTodos = todos.map((todo, index) =>
            index === indexToToggle ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    }

    return (
        <div className={styles.todoList}>
            {todos.map((item, index) => (
                <TodoItem 
                    key={index} 
                    item={item} 
                    onDelete={() => handleDelete(index)} 
                    onToggle={() => toggleCompleted(index)} 
                />
            ))}
        </div>
    );
}
