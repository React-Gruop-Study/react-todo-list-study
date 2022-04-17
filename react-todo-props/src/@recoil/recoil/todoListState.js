import {atom} from "recoil";
import {storage} from "../../domain/storage";

const STORAGE_KEY = 'todoList';

export const todoListState = atom({
    key: 'todoList',
    default: storage.getItem(STORAGE_KEY, []),
    effects: [
        ({onSet}) => {
            onSet(newTodoList => {
                storage.setItem(STORAGE_KEY, newTodoList);
            });
        }
    ]
});
