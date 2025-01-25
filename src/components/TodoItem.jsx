import styles from './todolist.module.css';

export default function TodoItem({ item, onDelete, onToggle }) {
    return (
        <div className={`${styles.todoItem} ${item.completed ? styles.completed : ''}`}>
            <input 
                type="checkbox" 
                checked={item.completed} 
                onChange={() => onToggle(item)} // Toggle the completed state
            />
            <span className={styles.todoText}>{item.text}</span>
            <button 
                className={styles.actionButton} 
                onClick={() => onDelete(item)} // Trigger deletion
            >
                x
            </button>
        </div>
    );
}
