import {v4 as uuid} from "uuid";
import {useEffect, useState} from "react";

export class TodoStorage {
    STORAGE_KEY = 'todoList';

    getList() {
        const result = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
        return result ? result : [];
    }

    save(todoList) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todoList));
    }
}

export const useTodoService = (todoStorage) => {
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
        return todoStorage.getList();
    }

    function save(todoList) {
        todoStorage.save(todoList);
    }

    return {todoList, saveTodo, removeTodo, updateTodo}
}
