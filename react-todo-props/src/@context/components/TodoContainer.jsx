import {TodoInput} from "./TodoInput";
import {TodoProvider} from "../hooks/useTodoContext";
import {TodoList} from "./TodoList";
import {useEffect, useState} from "react";
import {LocalStorage} from "../../utils/LocalStorage";

export const TodoContainer = () => {
    const storage = new LocalStorage();

    const [todoList,setTodoList] = useState(storage.getItem('todoList',[]));

    useEffect(()=>{
        storage.setItem('todoList',todoList);
    },[todoList]);

    return (
        <TodoProvider value={{todoList,setTodoList}}>
            <TodoInput/>
            <TodoList/>
        </TodoProvider>
    );
}
