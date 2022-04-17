import {useState} from "react";
import {TodoModify} from "./TodoModify";
import {TodoService} from "../../domain/TodoService";
import {useRecoilState} from "recoil";
import {todoListState} from "../recoil/todoListState";

export const TodoItem = ({todo}) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const todoService = TodoService(todoList);

    const [checked, setChecked] = useState(todo.checked || false);

    const updateTodoChecked = ({target: {checked}}) => {
        setChecked(checked);

        const result = todoService.updateTodo({...todo, checked});
        setTodoList(result);
    }

    const removeTodoItem = () => {
        const result = todoService.removeTodo(todo);
        setTodoList(result);
    };

    return (
        <>
            <div className="form-check">
                <label className="form-check-label">
                    <input className="checkbox"
                           type="checkbox"
                           checked={checked}
                           onChange={updateTodoChecked}
                           role="todoChecked"/>
                    <i className="input-helper"/>
                </label>

                <TodoModify todo={todo}/>
            </div>

            <i className="remove mdi mdi-close-circle-outline"
               onClick={removeTodoItem} role="removeTodo"/>
        </>
    )
}
