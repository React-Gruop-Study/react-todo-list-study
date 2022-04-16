import {v4 as uuid} from "uuid";
import {useEffect, useState} from "react";

class TodoStorage {
    STORAGE_KEY = 'todoList';

    getList() {
        const result = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
        return result ? result : [];
    }

    save(todoList) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todoList));
    }
}

export const storage = new TodoStorage();

export const useTodoService = () => {
    const [todoList, setTodoList] = useState(storage.getList());

    useEffect(() => {
        storage.save([...todoList]);
    }, [todoList]);

    const saveTodo = todo => {
        const addTodo = {id: uuid(), checked: false, editState: false, ...todo};
        setTodoList([...todoList, addTodo]);
    }

    const removeTodo = todo => {
        todoList.splice(todoList.indexOf(todo), 1);
        setTodoList([...todoList]);
    }

    const updateTodo = (old, newTodo) => {
        const result = [...todoList];
        result.splice(result.indexOf(old), 1, {...old, ...newTodo});
        setTodoList(result);
    }

    return {todoList, saveTodo, removeTodo, updateTodo}
}
