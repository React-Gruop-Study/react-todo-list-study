import {v4 as uuid} from "uuid";

export const TodoService = (todoList) => {
    const addTodo = (todo) => {
        const addTodoItem = {id: uuid(), checked: false, editState: false, ...todo};
        return [...todoList, addTodoItem];
    }

    const removeTodo = (todo) => {
        return [...todoList].filter(item => item.id !== todo.id);
    }

    const updateTodo = (todo) => {
        const filteredById = todoList.filter(item => item.id === todo.id);
        const old = filteredById[0];
        const result = [...todoList];
        result.splice(result.indexOf(old), 1, {...old, ...todo});
        return result;
    }

    return {addTodo, removeTodo, updateTodo}
}

