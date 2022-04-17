import {useEffect, useRef, useState} from "react";
import {useTodoContext} from "../hooks/useTodoContext";
import {TodoService} from "../../domain/TodoService";

export const TodoInput = () => {
    const {todoList, setTodoList} = useTodoContext();

    const todoService = TodoService(todoList);

    const [inputText, setInputText] = useState('');

    const $inputRef = useRef();

    useEffect(() => {
        $inputRef.current.focus();
    }, []);

    const saveTodoItem = event => {
        event.preventDefault();

        if (!inputText) {
            $inputRef.current.focus();
            return alert('할일을 입력하세요');
        }

        setInputText('');

        const result = todoService.addTodo({memo: inputText});
        setTodoList(result);
    }

    const onChange = ({target: {value}}) => {
        setInputText(value);
    }

    return (
        <form className="add-items d-flex" onSubmit={saveTodoItem}>
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
