import {useState} from "react";
import {TodoService} from "../../domain/TodoService";
import {useRecoilState} from "recoil";
import {todoListState} from "../recoil/todoListState";

export const TodoModify = ({todo}) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const todoService = TodoService(todoList);

    const [modifyAble, setModifyAble] = useState(false);
    const [modifyInput, setModifyInput] = useState('');

    const toggleModify = () => {
        setModifyInput(todo.memo);
        setModifyAble(!modifyAble);
    }

    const onChangeModifyInput = ({target: {value}}) => {
        setModifyInput(value);
    }

    const handleSubmitModify = e => {
        e.preventDefault();

        if (!modifyInput) return alert('할 일을 입력하세요');

        setModifyAble(false);

        const result = todoService.updateTodo({...todo, memo: modifyInput});
        setTodoList(result);
    }

    if (!modifyAble) {
        return <span onClick={toggleModify}>{todo.memo}</span>;
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
                        onClick={toggleModify}>
                    취소
                </button>
            </form>
        </>
    );
}
