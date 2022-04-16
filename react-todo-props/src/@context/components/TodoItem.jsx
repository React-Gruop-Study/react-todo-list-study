import {useState} from "react";
import {TodoModify} from "./TodoModify";
import {useTodoContext} from "../hooks/useTodoContext";

export const TodoItem = ({todo}) => {
    const {removeTodo, updateTodo} = useTodoContext();
    const [checked, setChecked] = useState(todo.checked);

    const updateChecked = ({target: {checked}}) => {
        setChecked(checked);
        updateTodo(todo, {checked});
    }

    const removeTodoItem = () => {
        removeTodo(todo);
    };

    return (
        <>
            <div className="form-check">
                <label className="form-check-label">
                    <input className="checkbox"
                           type="checkbox"
                           checked={checked}
                           onChange={updateChecked}
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
