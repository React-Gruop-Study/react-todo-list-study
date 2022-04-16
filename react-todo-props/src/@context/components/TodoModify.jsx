import {useState} from "react";
import {useTodoContext} from "../hooks/useTodoContext";

export const TodoModify = ({todo}) => {
    const {updateTodo} = useTodoContext();

    const [modifyAble, setModifyAble] = useState(false);
    const [modifyInput, setModifyInput] = useState('');

    const toggleModifyAble = () => {
        setModifyInput(todo.memo);
        setModifyAble(!modifyAble);
    }

    const onChangeModifyInput = ({target: {value}}) => {
        setModifyInput(value);
    }

    const handleSubmitModify = e => {
        e.preventDefault();

        if (!modifyInput) return alert('할 일을 입력하세요');
        updateTodo(todo, {memo: modifyInput});
        setModifyAble(false);
    }

    if (!modifyAble) {
        return <span onClick={toggleModifyAble}>{todo.memo}</span>;
    }

    return (
        <>
            <span>{modifyInput}</span>

            <form onSubmit={handleSubmitModify}
                  className="d-flex gap-2 mt-2">

                <input type="text"
                       onChange={onChangeModifyInput}
                       value={modifyInput}
                       className="form-control"/>

                <button className="btn btn-sm btn-primary">저장</button>

                <button type="button"
                        className="btn btn-sm btn-danger"
                        onClick={toggleModifyAble}>
                    취소
                </button>
            </form>
        </>
    );
}
