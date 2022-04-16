import {v4 as uuid} from "uuid";

export class TodoService {
    storageKey = 'todoList';
    storage;

    todoList = [];

    constructor(storage, todoList) {
        this.storage = storage;
        this.todoList = todoList;
    }

    add(todo) {
        const addTodo = {id: uuid(), checked: false, editState: false, ...todo};
        return [...this.todoList, addTodo];
    }

    remove(todo) {
        this.todoList.splice(this.todoList.indexOf(todo), 1);
        return [...this.todoList];
    }

    update(old, newTodo) {
        const result = [...this.todoList];
        result.splice(result.indexOf(old), 1, {...old, ...newTodo});
        return result;
    }

    selectList() {
        return this.storage.getItem(this.storageKey, []);
    }

    save(todoList) {
        this.storage.setItem(this.storageKey, todoList);
    }
}
