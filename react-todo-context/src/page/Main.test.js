import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {TodoContainer} from "../components/TodoContainer";

describe('TODO-LIST 테스트', () => {
    const mockStorage = {
        getList: () => {
            return [];
        }, save: () => {
        }
    }

    beforeEach(() => {
        render(<TodoContainer todoStorage={mockStorage}/>);
    });

    async function addTodo() {
        const $input = screen.getByRole('todoInput');

        fireEvent.change($input, {target: {value: 'test'}});

        const $button = screen.getByRole('addTodoButton');
        await userEvent.click($button);

        const $addedItem = screen.getByRole('todoListItem');
        expect($addedItem).toHaveTextContent('test');
    }

    test('할일 추가 테스트', async () => {
        await addTodo();
    });

    test('할일 삭제 테스트', async () => {
        await addTodo();

        const $button = screen.getByRole('removeTodo');
        await userEvent.click($button);

        const $todoList = screen.getByRole('todoList');

        expect($todoList).toBeEmptyDOMElement();
    });
});
