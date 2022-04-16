import {useState} from "react";

export const TodoModify = ({text, onSubmitModify}) => {
    const [modifyAble, setModifyAble] = useState(false);
    const [modifyInput, setModifyInput] = useState('');

    const toggleModifyAble = () => {
        setModifyInput(text);
        setModifyAble(!modifyAble);
    }

    const onChangeModifyInput = ({target: {value}}) => {
        setModifyInput(value);
    }

    const handleSubmitModify = e => {
        e.preventDefault();

        onSubmitModify(modifyInput);

        setModifyAble(false);
    }

    if (!modifyAble) {
        return <span onClick={toggleModifyAble}>{text}</span>;
    }

    return (
        <>
            <span>{modifyInput}</span>

            <form onSubmit={handleSubmitModify}
                  className="d-flex gap-2 mt-2">

                <input type="text"
                       onChange={onChangeModifyInput}
                       value={modifyInput}
                       className="form-control"/>

                <button className="btn btn-sm btn-primary">저장</button>

                <button type="button"
                        className="btn btn-sm btn-danger"
                        onClick={toggleModifyAble}>
                    취소
                </button>
            </form>
        </>
    );
}
