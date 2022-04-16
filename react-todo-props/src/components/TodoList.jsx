import {TodoItem} from "./TodoItem";
import {useTodoContext} from "../hooks/useTodoContext";

export const TodoList = () => {
    const {todoList} = useTodoContext();

    return (
        <div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list" role="todoList">
                {todoList.map(todo =>
                    <li role="todoListItem" key={todo.id}>
                        <TodoItem
                            todo={todo}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
}
