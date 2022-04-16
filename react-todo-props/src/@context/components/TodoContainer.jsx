import {TodoInput} from "./TodoInput";
import {TodoProvider} from "../hooks/useTodoContext";
import {TodoList} from "./TodoList";
import {LocalStorage} from "../../utils/LocalStorage";
import {useTodoService} from "../hooks/useTodoService";

export const TodoContainer = () => {
    const {todoList, saveTodo, removeTodo, updateTodo} = useTodoService(new LocalStorage());

    return (
        <TodoProvider value={{todoList, saveTodo, removeTodo, updateTodo}}>
            <TodoInput/>
            <TodoList/>
        </TodoProvider>
    );
}
