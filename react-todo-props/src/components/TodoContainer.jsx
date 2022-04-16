import {TodoInput} from "./TodoInput";
import {TodoStorage, useTodoService} from "../hooks/useTodoService";
import {TodoProvider} from "../hooks/useTodoContext";
import {TodoList} from "./TodoList";

export const TodoContainer = () => {
    const {todoList, saveTodo, removeTodo, updateTodo} = useTodoService(new TodoStorage());
    const context = {todoList, saveTodo, removeTodo, updateTodo};

    return (
        <TodoProvider value={context}>
            <TodoInput/>
            <TodoList/>
        </TodoProvider>
    );
}
