import {useState} from "react";
import {TodoModify} from "./TodoModify";

export const TodoItem = ({text, check = false, onChangeCheck, onSubmitModify, onClickRemove}) => {
    const [checked, setChecked] = useState(check);

    const handleChangeCheck = ({target: {checked}}) => {
        setChecked(checked);
        onChangeCheck(checked);
    }
    const handleClickRemove = () => onClickRemove();
    const handleSubmitModify = text => onSubmitModify(text);

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

                <TodoModify text={text} onSubmitModify={handleSubmitModify}/>
            </div>

            <i className="remove mdi mdi-close-circle-outline"
               onClick={handleClickRemove}
               role="removeTodo"/>
        </>
    )
}
