import styles from './todolist.module.css';

export default function TodoItem({ item, onDelete, onToggle }) {
    return (
        <div className={`${styles.todoItem} ${item.completed ? styles.completed : ''}`}>
            <input 
                type="checkbox" 
                checked={item.completed} 
                onChange={onToggle} // ✅ Toggle completion
            />
            <span className={styles.todoText}>{item.text}</span>
            <button 
                className={styles.actionButton} 
                onClick={onDelete} // ✅ Delete
            >
                x
            </button>
        </div>
    );
}
