import {TodoInput} from "./TodoInput";
import {useTodoService} from "../hooks/useTodoService";
import {TodoProvider} from "../hooks/useTodoContext";
import {TodoList} from "./TodoList";

export const TodoContainer = () => {
    const {todoList, add, remove, update} = useTodoService();
    const context = {todoList, add, remove, update};

    return (
        <TodoProvider value={context}>
            <TodoInput/>
            <TodoList/>
        </TodoProvider>
    );
}
