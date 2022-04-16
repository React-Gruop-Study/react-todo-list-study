import {v4 as uuid} from "uuid";
import {useEffect, useState} from "react";

const TodoService = (todoList) => {
    return {
        add: (todo) => {
            const addTodo = {id: uuid(), checked: false, editState: false, ...todo};

            return [...todoList, addTodo];
        }, remove: (todo) => {
            todoList.splice(todoList.indexOf(todo), 1);
            return [...todoList];
        }, update: (old, newTodo) => {
            const result = [...todoList];
            result.splice(result.indexOf(old), 1, {...old, ...newTodo});
            return result;
        }
    }
}

export const useTodoList = (todoStorage, initial) => {
    const initList = [...todoStorage.getList(), ...initial];
    const [todoList, setTodoList] = useState(initList);
    const todoService = TodoService(todoList);

    useEffect(() => {
        todoStorage.save(todoList);
    }, [todoList]);

    const add = (todo) => setTodoList(todoService.add(todo));
    const remove = (todo) => setTodoList(todoService.remove(todo));
    const update = (old, newTodo) => setTodoList(todoService.update(old, newTodo));

    return {
        add, remove, update, items: todoList
    }
}
