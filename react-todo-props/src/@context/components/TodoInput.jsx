import {useEffect, useRef, useState} from "react";
import {useTodoContext} from "../hooks/useTodoContext";

export const TodoInput = () => {
    const {saveTodo} = useTodoContext();

    const [inputText, setInputText] = useState('');

    const $inputRef = useRef();

    useEffect(() => {
        $inputRef.current.focus();
    }, []);

    const handleSubmitInput = event => {
        event.preventDefault();

        if (!inputText) {
            $inputRef.current.focus();
            return alert('할일을 입력하세요');
        }

        saveTodo({memo: inputText});
        setInputText('');
    }

    const onChange = ({target: {value}}) => {
        setInputText(value);
    }

    return (
        <form className="add-items d-flex" onSubmit={handleSubmitInput}>
            <input type="text"
                   ref={$inputRef}
                   value={inputText}
                   id="input"
                   className="form-control todo-list-input"
                   placeholder="해야 할 일을 입력하세요"
                   onChange={onChange}
                   role="todoInput"/>

            <button className="add btn btn-primary font-weight-bold"
                    role="addTodoButton">
                Add
            </button>
        </form>
    );
}
