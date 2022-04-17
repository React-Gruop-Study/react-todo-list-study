import {useState} from "react";
import {TodoModify} from "./TodoModify";
import {useTodoContext} from "../hooks/useTodoContext";
import {TodoService} from "../../utils/TodoService";

export const TodoItem = ({todo}) => {
    const {todoList, setTodoList} = useTodoContext();

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
