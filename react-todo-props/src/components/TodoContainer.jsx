import {TodoInput} from "./TodoInput";
import {TodoList} from "./TodoList";
import {useTodoList} from "../lib/TodoService";

export const TodoContainer = () => {
    const todoList = useTodoList([]);

    const onSubmitInput = (todo) => todoList.add(todo);
    const onClickRemove = (todo) => todoList.remove(todo);
    const onChangeCheck = (todo, checked) => todoList.update(todo, {checked});
    const onSubmitModify = (todo, message) => todoList.update(todo, {message});

    const todoInputProps = {
        onSubmitInput
    };

    const todoListProps = {
        todoList: todoList.items,
        onClickRemove,
        onChangeCheck,
        onSubmitModify
    }

    return (
        <>
            <TodoInput {...todoInputProps}/>
            <TodoList {...todoListProps}/>
        </>
    );
}
