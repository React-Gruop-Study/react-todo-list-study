import {v4 as uuid} from "uuid";
import {useEffect, useState} from "react";

export const useTodoService = (storage) => {
    const storageKey = 'todoList';

    const [todoList, setTodoList] = useState(getList());

    useEffect(() => {
        save([...todoList]);
    }, [todoList]);

    function saveTodo(todo) {
        const addTodo = {id: uuid(), checked: false, editState: false, ...todo};
        setTodoList([...todoList, addTodo]);
    }

    function removeTodo(todo) {
        todoList.splice(todoList.indexOf(todo), 1);
        setTodoList([...todoList]);
    }

    function updateTodo(old, newTodo) {
        const result = [...todoList];
        result.splice(result.indexOf(old), 1, {...old, ...newTodo});
        setTodoList(result);
    }

    function getList() {
        return storage.getItem(storageKey, []);
    }

    function save(todoList) {
        storage.setItem(storageKey, todoList);
    }

    return {todoList, saveTodo, removeTodo, updateTodo}
}
