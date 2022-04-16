import {TodoItem} from "./TodoItem";

export const TodoList = ({todoList, onClickRemove, onChangeCheck, onSubmitModify}) => {
    const handleChangeCheck = (todo) => {
        return checked => {
            onChangeCheck(todo, checked);
        };
    }

    const handleClickRemove = (todo) => {
        return () => {
            onClickRemove(todo);
        };
    }

    const handleSubmitModify = (todo) => {
        return text => {
            if (!text) return alert('할 일을 입력하세요');

            onSubmitModify(todo, text);
        };
    }

    return (
        <div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list" role="todoList">
                {todoList.map(todo =>
                    <li role="todoListItem" key={todo.id}>
                        <TodoItem
                            text={todo.message}
                            check={todo.checked}
                            onSubmitModify={handleSubmitModify(todo)}
                            onChangeCheck={handleChangeCheck(todo)}
                            onClickRemove={handleClickRemove(todo)}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
}
