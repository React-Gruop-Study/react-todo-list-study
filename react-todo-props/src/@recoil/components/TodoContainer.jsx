import {useRecoilState} from "recoil";
import {todoListState} from "../recoil/todoListState";

export const TodoContainer = () => {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    return (
        <>
            <TodoList/>
            {todoList.map(todo => <div key={todo.id}>{todo.message}</div>)}
        </>
    );
}

export const TodoList = () => {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const addTodoItem = e => {
        setTodoList([...todoList, {message: 'test', id: todoList.length + 1}])
    }

    return (
        <>
            <button onClick={addTodoItem}>add</button>
        </>
    );
}