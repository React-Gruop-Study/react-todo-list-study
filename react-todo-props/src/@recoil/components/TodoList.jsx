import {TodoItem} from "./TodoItem";
import {useRecoilState} from "recoil";
import {todoListState} from "../recoil/todoListState";

export const TodoList = () => {
    const [todoList] = useRecoilState(todoListState);

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
