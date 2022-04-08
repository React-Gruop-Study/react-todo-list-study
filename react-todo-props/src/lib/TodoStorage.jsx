const TodoStorage = () => {
    const STORAGE_KEY = 'todoList';

    const getList = () => {
        const result = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return result ? result : [];
    }

    const save = todoList => localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));

    return {getList, save};
}

export const todoStorage = TodoStorage();
