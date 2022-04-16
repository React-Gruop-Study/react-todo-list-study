import {useState} from "react";
import {TodoModify} from "./TodoModify";
import {useTodoContext} from "../hooks/useTodoContext";

export const TodoItem = ({todo}) => {
    const {update, remove} = useTodoContext();
    
    const [checked, setChecked] = useState(todo.checked);

    const handleChangeCheck = ({target: {checked}}) => {
        setChecked(checked);
        update(todo, {checked});
    }

    const handleClickRemove = () => {
        remove(todo);
    };

    return (
        <>
            <div className="form-check">
                <label className="form-check-label">
                    <input className="checkbox"
                           type="checkbox"
                           checked={checked}
                           onChange={handleChangeCheck}
                           role="todoChecked"/>
                    <i className="input-helper"/>
                </label>

                <TodoModify todo={todo}/>
            </div>

            <i className="remove mdi mdi-close-circle-outline"
               onClick={handleClickRemove} role="removeTodo"/>
        </>
    )
}
