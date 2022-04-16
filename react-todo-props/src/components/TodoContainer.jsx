import {TodoInput} from "./TodoInput";
import {useTodoService} from "../hooks/useTodoService";
import {TodoProvider} from "../hooks/useTodoContext";
import {TodoList} from "./TodoList";

export const TodoContainer = () => {
    const {todoList, saveTodo, removeTodo, updateTodo} = useTodoService();
    const context = {todoList, saveTodo, removeTodo, updateTodo};

    return (
        <TodoProvider value={context}>
            <TodoInput/>
            <TodoList/>
        </TodoProvider>
    );
}
