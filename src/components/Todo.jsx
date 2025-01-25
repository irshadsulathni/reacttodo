import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
    const [todos, setTodos] = useState([]); // State for todos (array of objects)

    return (
        <div>
            <Form todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}
