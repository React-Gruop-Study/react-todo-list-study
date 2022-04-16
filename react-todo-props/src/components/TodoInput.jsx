import {createRef, useEffect, useState} from "react";
import {useTodoContext} from "../hooks/useTodoContext";

export const TodoInput = () => {
    const {saveTodo} = useTodoContext();

    const [inputText, setInputText] = useState('');

    const inputRef = createRef();
    const $inputElement = () => inputRef.current;

    useEffect(() => {
        $inputElement().focus();
    }, []);

    useEffect(() => {
        $inputElement().value = inputText;
    }, [inputText]);

    const handleSubmitInput = event => {
        event.preventDefault();

        if (!inputText) {
            $inputElement().focus();
            return alert('할일을 입력하세요');
        }

        saveTodo({message: inputText});

        setInputText('');
    }

    const onChange = ({target: {value}}) => {
        setInputText(value);
    }

    return (
        <form className="add-items d-flex" onSubmit={handleSubmitInput}>
            <input type="text"
                   ref={inputRef}
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
